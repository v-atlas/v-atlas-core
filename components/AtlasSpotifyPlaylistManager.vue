<template>
  <div class="flex flex-col gap-10">
    <div class="flex max-w-fit flex-col gap-2 md:flex-row">
      <button
        class="text-light flex items-center gap-2 rounded-md bg-lochmara px-5 py-2 font-bold transition-colors duration-200 hover:bg-opacity-70"
        :disabled="isFetchingFromAtlas"
        @click="handleFetchAllPlaylistToAtlas"
      >
        <img src="~/assets/images/sync.svg" alt="sync icon" />
        My Atlas Playlists

        <font-awesome-icon
          v-if="isFetchingFromAtlas"
          icon="fa-solid fa-circle-notch"
          spin
        />
      </button>
    </div>

    <div v-if="playlistAvailable">
      <div
        class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 2xl:grid-cols-4"
      >
        <spotify-playlist-item v-for="item of playlistData" :playlist="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSpotifyStore } from "~/stores/spotify";

const spotifyStore = useSpotifyStore();

const {
  status: fetchAllPlaylistStatus,
  execute: fetchPlaylistsFromAtlas,
  data: playlistData,
} = useAsyncData(
  async () => {
    await spotifyStore.enableProtocol();
    const playlist = await spotifyStore.fetchPlaylistsFromAtlas();
    return playlist;
  },
  {
    immediate: false,
  },
);

const handleFetchAllPlaylistToAtlas = () => fetchPlaylistsFromAtlas();

const playlistAvailable = computed<boolean>(() =>
  Boolean(playlistData.value && playlistData.value.length > 0),
);

const isFetchingFromAtlas = computed<boolean>(
  () => fetchAllPlaylistStatus.value === "pending",
);

onMounted(() => {
  fetchPlaylistsFromAtlas();
});
</script>

<style scoped></style>
