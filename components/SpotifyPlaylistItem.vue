<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col gap-4 rounded-md border-2 bg-emerald-500/20 p-4 transition-colors duration-200 hover:border-emerald-500/50 md:p-2 xl:flex-row"
    >
    <div class="flex flex-col xl:flex-row gap-6">


      <img
        loading="lazy"
        class="max-h-40 max-w-fit rounded-md border-2 border-white md:mx-0"
        v-if="playlist.images.length > 0"
        :src="playlist.images[0].url"
        alt="Playlist Cover"
      />
      <img
        v-else
        class="rounded-md border-2 border-white md:mx-0 md:h-40 md:max-w-xs"
        src="~/assets/images/spotify.png"
        alt="Fallback Image"
      />
      <div class="flex flex-col justify-center">
        <span class="text-xl line-clamp-1 font-bold md:max-w-56">{{ playlist.name }}</span>
        <p class="line-clamp-1 text-clip text-sm md:w-40 xl:max-w-[300px]">
          {{ playlist.description || playlist.name }}
        </p>
      </div>
    </div>

      <div class="ml-auto flex flex-col justify-end gap-2 align-bottom md:flex-col"
      >
        <spotify-tracks-item :playlist="playlist" />
        <div class="flex flex-row gap-2 max-[480px]:flex-col md:flex-col">
          <a
            class="flex flex-row justify-between gap-5 rounded-lg bg-emerald-500/50 px-4 py-3 align-middle no-underline transition-colors duration-200 hover:bg-emerald-800/90"
            :href="playlist.external_urls.spotify"
            target="blank"
          >
            <span class="font-bold"> View on Spotify </span>
            <font-awesome-icon icon="fa-brands fa-spotify" class="my-auto" />
          </a>

          <button
            class="flex flex-row justify-between gap-5 rounded-lg bg-broom-500 px-4 py-3 align-middle text-black transition-colors duration-200 hover:bg-broom-300"
          >
            <span class="font-bold"> Add to My Atlas </span>
            <font-awesome-icon icon="fa-plus" class="my-auto" />
          </button>
        </div>
      </div>
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

<style scoped></style>
