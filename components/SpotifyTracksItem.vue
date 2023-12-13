<template>
  <button
    @click="fetchTracks"
    :disabled="isProcessing"
    class="flex flex-row justify-between gap-5 rounded-lg bg-rose-500/50 px-4 py-3 align-middle transition-colors duration-200 hover:enabled:bg-rose-800/90 disabled:bg-rose-800/30"
  >
    <span class="font-bold"> {{ playlist.tracks.total }} Tracks </span>
    <font-awesome-icon
      icon="fa-circle-notch"
      class="my-auto"
      spin
      v-if="isProcessing"
    />
    <font-awesome-icon icon="fa-eye" class="my-auto" v-else />
  </button>

  <dialog
    ref="trackPreview"
    class="shadow-light/50 fixed transform rounded-md border-2 border-lochmara-500 bg-black p-2 text-white shadow-xl outline-none transition-all duration-200 backdrop:bg-athens-gray-900/50 backdrop:backdrop-blur-sm"
  >
    <div class="w-full max-w-6xl">
      <div class="flex flex-col gap-5 p-5">
        <div class="flex flex-row">
          <span class="my-auto text-sm font-bold">
            {{ playlist.name }}
          </span>

          <button
            @click="handleCloseModal"
            class="ml-auto h-8 w-8 rounded-md bg-red-500 text-white"
          >
            <font-awesome-icon icon="fa-solid fa-times" />
          </button>
        </div>

        <div
          class="tracks flex max-h-96 flex-col gap-y-2 overflow-auto"
          v-if="data?.success"
        >
          <div
            v-for="item in data.data?.items"
            class="flex flex-col gap-2 rounded-md border-2 p-2"
            :key="item.track.id"
          >
            <picture>
              <source
                :media="`(min-width:${image.width}px)`"
                :srcset="image.url"
                v-for="image of item.track.album.images"
              />
            </picture>

            <span class="track-name text-md font-bold">
              {{ item.track.name }}
            </span>

            <p class="artists text-sm">
              {{ item.track.artists.map((artist) => artist.name).join(", ") }}
            </p>

            <spotify-track-preview-item :media-url="item.track.preview_url" />
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import { type SpotifyPlaylistItem } from "~/types";

const props = defineProps<{
  playlist: SpotifyPlaylistItem;
}>();

const authStore = useAuthStore();
const { spotifyAccessToken } = storeToRefs(authStore);

const trackPreview = ref<HTMLDialogElement>();

const { execute, status, data } = useLazyFetch(
  "/api/fetch-spotify-playlist-tracks",
  {
    method: "POST",
    immediate: false,
    cache: "no-cache",
    body: {
      token: spotifyAccessToken,
      href: props.playlist.tracks.href,
    },
  },
);

const isProcessing = computed<boolean>(() => status.value === "pending");

const fetchTracks = () => execute();

function handleOpenModal() {
  if (trackPreview.value) {
    trackPreview.value.showModal();
  }
}

function handleCloseModal() {
  if (trackPreview.value) {
    trackPreview.value.close();
  }
}

watch(
  () => status.value === "success",
  () => {
    if (data.value?.success) {
      handleOpenModal();
    }
  },
);
</script>

<style></style>
