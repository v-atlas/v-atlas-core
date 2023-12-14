<template>
  <div class="w-full max-w-6xl">
    <div class="tracks mb-16 flex flex-col gap-y-2" v-if="data?.success">
      <div
        v-for="(item, index) in data.data?.items"
        class="flex flex-col px-[13px] py-[18px]"
        :key="item.track.id"
      >
        <div class="flex items-center justify-between">
          <div class="flex basis-[90%] items-center gap-[10px] lg:basis-[60%]">
            <div>
              {{ index + 1 }}
            </div>
            <div class="h-[76px] w-[67px] rounded-[10px]">
              <img
                :src="item.track.album.images[0].url"
                class="h-[76px] w-[67px] rounded-[10px] object-cover"
                alt="image"
              />
            </div>
            <div class="basis-[70%]">
              <span class="track-name text-md line-clamp-1 font-bold">
                {{ item.track.name }}
              </span>

              <p class="artists line-clamp-1 text-sm text-subdued">
                {{ item.track.artists.map((artist) => artist.name).join(", ") }}
              </p>
            </div>
          </div>
          <div class="line-clamp-1 hidden lg:block lg:basis-[30%]">
            {{ item.track.album.name }}
          </div>
          <div class="basis-[10%] text-end">
            {{ formatDuration(item.track.duration_ms) }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 flex items-center gap-24 left-0 w-full border-t border-gray-800 bg-[#0C0E18] py-5 pl-20 sm:ml-64"
    >
      <!-- <div class="flex items-center gap-[10px]">
        <div class="h-[76px] w-[67px] rounded-[10px]">
          <img
            src="~/assets/images/dropbox.svg"
            class="h-[76px] w-[67px] rounded-[10px] object-cover"
            alt="image"
          />
        </div>
        <div>
          <span class="track-name text-md line-clamp-1 font-bold">
            Terminator
          </span>

          <p class="artists line-clamp-1 text-sm text-subdued">Asake</p>
        </div>
      </div>
      <div>
        PLAYER
      </div> -->
    </div>
  </div>
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

function formatDuration(milliseconds: number) {
  // Calculate minutes and seconds
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = (milliseconds % 60000) / 1000;

  // Return formatted duration
  return `${minutes}:${seconds <= 9 ? "0" : ""}${seconds.toFixed(0)}`;
}

const isProcessing = computed<boolean>(() => status.value === "pending");

const fetchTracks = () => execute();

onMounted(() => {
  // Fetch tracks when the component is mounted
  fetchTracks();
});
</script>

<style></style>
