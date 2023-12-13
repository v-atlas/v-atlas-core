<template>
  <div class="flex flex-col gap-10">
    <div class="flex max-w-fit flex-col gap-2 md:flex-row">
      <button
        class="items-center text-light gap-2 rounded-md bg-atlas-red py-2 px-5 font-bold transition-colors duration-200 flex hover:bg-opacity-70"
        :disabled="playlistFetchStatus === 'pending'"
        @click="handleDownloadPlaylist"
      >
      <img src="~/assets/images/sync.svg" alt="sync icon" />
        Sync Playlists

        <font-awesome-icon
          v-if="playlistFetchStatus === 'pending'"
          icon="fa-solid fa-circle-notch"
          spin
        />
   
      </button>

      <button
        class="flex gap-2 rounded-md bg-[linear-gradient(180deg,rgb(27.34,31.82,49.71)0%,rgba(27.34,31.82,49.71,0.59)100%)] py-[10px] px-7 font-medium text-[#D1D1D5] transition-colors duration-200 hover:bg-primary"
        v-if="playlistAvailable"
      >
      <img src="~/assets/images/copy.svg" alt="copy icon" />
        Add to My Atlas
     
      </button>
    </div>

    <div v-if="playlistAvailable">
      <div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 2xl:grid-cols-4">
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
</script>

<style scoped></style>
