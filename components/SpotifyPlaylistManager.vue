<template>
  <div class="flex flex-col gap-10">
    <div class="flex max-w-fit flex-col gap-2 md:flex-row">
      <button
        class="text-light gap-2 rounded-md bg-lochmara-500 p-2 font-bold transition-colors duration-200 hover:bg-lochmara-600"
        :disabled="playlistFetchStatus === 'pending'"
        @click="handleDownloadPlaylist"
      >
        Sync Playlists

        <font-awesome-icon
          v-if="playlistFetchStatus === 'pending'"
          icon="fa-solid fa-circle-notch"
          spin
        />
        <font-awesome-icon icon="fa-download" v-else />
      </button>

      <button
        class="rounded-md bg-broom-500 p-2 font-bold text-black transition-colors duration-200 hover:bg-broom-600"
        v-if="playlistAvailable"
      >
        Copy All to My Atlas
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>

    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5">
      <spotify-playlist-item
        v-for="item of playlistData?.data?.items"
        :playlist="item"
      />
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
