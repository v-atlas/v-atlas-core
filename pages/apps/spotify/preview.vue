<template>
  <div>
    <div class="mt-4 mb-6 flex gap-[10px]">
      <div class="p-[7px] rounded-[100px] bg-[#1b1f31]">  <img
            src="~/assets/images/previous.svg"
            alt="previous icon"
          /></div>
          <div class="p-[7px] rounded-[100px] bg-[#1b1f31]">
            <img
            src="~/assets/images/next.svg"
            alt="next icon"
          />
          </div>
    </div>
    <div
      class="mb-[50px] flex items-center gap-10 rounded-[10px] bg-primary p-[14px]"
    >
      <div class="relative ">
        <img
          src="~/assets/images/youtube.svg"
          alt="album image"
          class="h-[150px] w-[150px] lg:h-[300px] lg:w-[300px]"
        />
      </div>
      <div class="space-y-2">
        <h2 class="line-clamp-2 text-2xl lg:text-5xl">
          Your Top Songs of 2023
        </h2>
        <p class="text-base text-subdued md:text-lg lg:text-3xl">
          Spotify Wrapped
        </p>
        <div class="text-xs text-subdued md:text-base">
          <span>32 songs</span><span class="mx-1">.</span
          ><span>1hour 32mins</span>
        </div>
      </div>
    </div>
    <play-songs
      v-for="item of playlistData?.data?.items"
      :playlist="item"
      :key="item?.id"
    />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

useHead({
  title: "Spotify Playlist | V-Atlas",
  meta: [
    {
      key: "keywords",
      content:
        "V-Atlas, digital identity, Web5, virtual storage, data management, user privacy, decentralized platforms, identity security.",
    },
  ],
});

useSeoMeta({
  title:
    "Spotify Playlist | V-Atlas: Revolutionizing Digital Identity and Data Management",
  description:
    "Discover V-Atlas, a visionary platform using Web5 technology to empower users with secure, flexible virtual storage and identity management. Control your digital presence like never before.",
});

const authStore = useAuthStore();

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

downloadPlayload({});
</script>

<style scoped>
</style>
