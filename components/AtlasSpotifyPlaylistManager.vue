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

    <div v-if="!isFetchingFromAtlas">
      <div
        class="bg-secondary sticky top-[79.2px] z-40 mb-10 flex h-24 items-center justify-between"
      >
        <h2 class="text-2xl">My Atlas Playlist</h2>
        <div @click="togglePlaylistVisibility">
          <div
            v-if="playlistVisible"
            class="flex cursor-pointer items-center gap-2 rounded-[10px] p-2 hover:bg-primary"
          >
            Hide
            <img
              class="h-8 w-8"
              src="~/assets/images/caretdown.svg"
              alt="caret"
            />
          </div>
          <div
            v-else
            class="flex cursor-pointer items-center gap-2 rounded-[10px] p-2 hover:bg-primary"
          >
            Show
            <img
              class="h-8 w-8"
              src="~/assets/images/caretup.svg"
              alt="caret"
            />
          </div>
        </div>
      </div>

      <div v-if="playlistVisible">
        <div v-if="playlistAvailable">
          <div
            class="grid gap-10 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 2xl:grid-cols-4"
          >
            <spotify-playlist-item
              v-for="item of playlistData"
              :playlist="item"
            />
          </div>
        </div>
        <p v-else class="grid h-[30vh] place-content-center">
          No Spotify playlist has been added to your Atlas.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSpotifyStore } from "~/stores/spotify";

const spotifyStore = useSpotifyStore();
const playlistVisible = ref(true);

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

const togglePlaylistVisibility = () => {
  playlistVisible.value = !playlistVisible.value;
};

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
