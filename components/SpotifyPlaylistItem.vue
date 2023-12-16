<template>
  <div class="relative bg-primary p-[14px]">
    <div class="relative mb-[14px]">
      <img
        loading="lazy"
        class="mx-auto"
        v-if="playlist.images.length > 0"
        :src="playlist.images[0].url"
        alt="Playlist Cover"
      />
      <img
        v-else
        class="mx-auto"
        src="~/assets/images/spotify.png"
        alt="Fallback Image"
      />
    </div>
    <div class="relative mb-[14px] flex justify-between">
      <div class="w-2/3">
        <h4 class="line-clamp-1">{{ playlist.name }}</h4>
        <p class="line-clamp-1 text-sm text-subdued">
          {{ playlist.description || playlist.name }}
        </p>
      </div>
      <div class="">
        <button
          type="button"
          aria-expanded="false"
          data-dropdown-toggle="dropdown-playlist"
          class="icon"
          @click="toggleDropdown"
        >
          <span class="sr-only">Open playlist menu</span>
          <img src="~/assets/images/menu.svg" alt="" />
        </button>
      </div>
      <div
        v-if="isDropdownVisible"
        class="absolute -bottom-28 right-0 z-50 w-full list-none divide-y divide-gray-600 rounded border border-[#23283D] bg-primary p-2 text-center text-base shadow"
        id="dropdown-playlist"
      >
        <ul class="" role="none">
          <li class="border-b border-[#23283D]">
            <nuxt-link
              to="/"
              class="flex items-center justify-center gap-1 px-4 py-3 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
              role="menuitem"
            >
              <img
                class="h-6 w-6"
                src="~/assets/images/add.svg"
                alt="add icon"
              />
              <p>Add to my Atlas</p>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/"
              class="flex items-center justify-center gap-1 px-4 py-3 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
              role="menuitem"
            >
              <img
                class="h-6 w-6"
                src="~/assets/images/remove.svg"
                alt="remove icon"
              />
              Remove from my Atlas
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <a
        :href="playlist.external_urls.spotify"
        target="blank"
        class="rounded-md bg-gradient-to-l from-[rgba(67,207,108,0.83)] px-7 py-[10px] text-center"
        >View on Spotify</a
      >
      <button
        @click="handlePreviewPlaylist"
        class="flex items-center justify-center gap-2 rounded-md border border-gray-800 bg-[linear-gradient(180deg,rgb(27.34,31.82,49.71)0%,rgba(27.34,31.82,49.71,0.59)100%)] px-7 py-[10px] text-[#D1D1D5]"
      >
        <img src="~/assets/images/play.svg" alt="play icon" />
        <span>Preview</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type SpotifyPlaylistItem } from "~/types";

const props = defineProps<{
  playlist: SpotifyPlaylistItem;
}>();

const isDropdownVisible = ref(false);

function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}

function handlePreviewPlaylist() {
  navigateTo({
    path: "/apps/spotify/preview",
    params: {
      playlist: JSON.stringify(props.playlist),
    },
  });
}
</script>

<style scoped></style>
