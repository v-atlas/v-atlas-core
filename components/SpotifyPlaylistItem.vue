<template>
  <div class="bg-primary p-[14px]">
    <div class="relative mb-[14px]">
      <img
        loading="lazy"
        class="mx-auto rounded-[2px]"
        v-if="playlist.images.length > 0"
        :src="playlist.images[0].url"
        alt="Playlist Cover"
      />
      <img
        v-else
        class="mx-auto rounded-[2px]"
        src="~/assets/images/spotify.png"
        alt="Fallback Image"
      />
      <div
        class="details-box absolute bottom-0 left-0 right-0 mx-auto w-[80%] rounded-t-[11.3px] border-x border-t border-[#ffffff4e] p-4"
      >
        <h4 class="line-clamp-1">{{ playlist.name }}</h4>
        <p class="line-clamp-1 text-xs text-[#FFFFFF9E]">
          {{ playlist.description || playlist.name }}
        </p>
      </div>
    </div>
    <div class="mb-[14px] flex justify-between">
      <div>
        <h4 class="line-clamp-1">{{ playlist.name }}</h4>
        <p class="line-clamp-1 text-sm text-subdued">
          {{ playlist.description || playlist.name }}
        </p>
      </div>
      <div class="icon">
        <img src="~/assets/images/menu.svg" alt="" />
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <!-- <spotify-tracks-item :playlist="playlist" /> -->
      <a
        :href="playlist.external_urls.spotify"
        target="blank"
        class="rounded-md bg-gradient-to-l from-[rgba(67,207,108,0.83)] px-7 py-[10px] text-center"
        >View on Spotify</a
      >
      <a
        href="/connected-apps/play-songs"
        class="flex items-center justify-center gap-2 rounded-md border border-gray-800 bg-[linear-gradient(180deg,rgb(27.34,31.82,49.71)0%,rgba(27.34,31.82,49.71,0.59)100%)] px-7 py-[10px] text-[#D1D1D5]"
      >
        <img src="~/assets/images/play.svg" alt="play icon" />
        <span>Play Songs</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSpotifyStore } from "~/stores/spotify";
import { type SpotifyPlaylistItem } from "~/types";

defineProps<{
  playlist: SpotifyPlaylistItem;
}>();

const spotifyStore = useSpotifyStore();
</script>

<style scoped>
.details-box {
  -webkit-backdrop-filter: blur(22.69px) brightness(100%);
  backdrop-filter: blur(22.69px) brightness(100%);
  background-color: #ffffff33;
}
</style>
