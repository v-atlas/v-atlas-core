<template>
  <div class="flex flex-col gap-10">
    <div class="flex max-w-fit flex-col gap-2 md:flex-row">
      <button
        class="text-light flex items-center gap-2 rounded-md bg-atlas-red px-5 py-2 font-bold transition-colors duration-200 hover:bg-opacity-70"
        :disabled="playlistFetchStatus === 'pending'"
        @click="handleDownloadPlaylist"
      >
        <img src="~/assets/images/sync.svg" alt="sync icon" />
        Sync Spotify Playlists

        <font-awesome-icon
          v-if="playlistFetchStatus === 'pending'"
          icon="fa-solid fa-circle-notch"
          spin
        />
      </button>

      <button
        class="flex gap-2 rounded-md bg-[linear-gradient(180deg,rgb(27.34,31.82,49.71)0%,rgba(27.34,31.82,49.71,0.59)100%)] px-7 py-[10px] font-medium text-[#D1D1D5] transition-colors duration-200 hover:bg-primary"
        v-if="playlistAvailable"
        :disabled="isAddingAllToAtlas"
        @click="handleAddAllPlaylistToAtlas"
      >
        <font-awesome-icon
          icon="fa-solid fa-circle-notch"
          spin
          v-if="isAddingAllToAtlas"
        />

        <img src="~/assets/images/copy.svg" alt="copy icon" v-else />
        Add to My Atlas
      </button>
    </div>

    <div v-if="playlistAvailable">
      <div
        class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <spotify-playlist-item
          v-for="item of playlistData?.data?.items"
          :playlist="item"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import { useSpotifyStore } from "~/stores/spotify";

const authStore = useAuthStore();
const spotifyStore = useSpotifyStore();

const { spotifyAccessToken } = storeToRefs(authStore);

const {
  execute: downloadPlayload,
  data: playlistData,
  status: playlistFetchStatus,
} = useLazyFetch("/api/fetch-spotify-account-playlist", {
  server: false,
  immediate: false,
  method: "POST",
  body: JSON.stringify({ token: spotifyAccessToken.value }),
});

const handleDownloadPlaylist = () => downloadPlayload({});

const playlistAvailable = computed<boolean>(() => {
  if (playlistData.value?.data) {
    if (playlistData.value.data.items.length > 0) {
      return true;
    }
  }

  return false;
});

const { status: addAllPlaylistStatus, execute: addAllPlaylistsToAtlas } =
  useAsyncData(
    async () => {
      if (!playlistData.value?.data?.items.length) {
        return;
      }

      const playlists = playlistData.value.data.items;

      await spotifyStore.addAllPlaylistsToAtlas(playlists);
    },
    {
      immediate: false,
    },
  );

const handleAddAllPlaylistToAtlas = () => addAllPlaylistsToAtlas();

const isAddingAllToAtlas = computed<boolean>(
  () => addAllPlaylistStatus.value === "pending",
);
</script>

<style scoped></style>
