<template>
  <div class="flex flex-col">
    <div
      class="flex flex-col gap-4 rounded-md bg-emerald-500/30 p-4 transition-colors duration-200 hover:bg-emerald-500/50 md:p-2 xl:flex-row"
    >
      <img
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
        <span class="text-xl font-bold">{{ playlist.name }}</span>
        <p class="line-clamp-2 text-clip text-sm md:w-40">
          {{ playlist.description || playlist.name }}
        </p>
      </div>

      <div class="ml-auto flex flex-col justify-end gap-2 align-bottom">
        <p class="text-right">{{ playlist.tracks.total }} Tracks</p>
        <div class="flex flex-row gap-2 md:flex-col">
          <a
            class="rounded-lg bg-emerald-500/50 px-4 py-3 font-bold no-underline transition-colors duration-200 hover:bg-emerald-300/50"
            :href="playlist.external_urls.spotify"
            target="blank"
          >
            View on Spotify
            <font-awesome-icon icon="fa-brands fa-spotify" />
          </a>

          <button
            class="rounded-lg bg-broom-500 px-4 py-3 font-bold text-black transition-colors duration-200 hover:bg-broom-300"
          >
            Add to My Atlas
            <font-awesome-icon icon="fa-plus" />
          </button>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="tracks">
        <spotify-tracks-item :tracks="playlist.tracks" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type SpotifyPlaylistItem } from "~/types";

defineProps<{
  playlist: SpotifyPlaylistItem;
}>();
</script>

<style scoped></style>
