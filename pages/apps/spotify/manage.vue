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
    <div class="flex flex-col">
      <div class="flex w-max flex-col gap-[20px] px-[5px] py-[10px]">
        <link-spotify />
      </div>

      <div class="m-1 flex flex-col gap-10">
        <div class="atlas-playlists">
          <atlas-spotify-playlist-manager />
        </div>
        <div class="spotify-actions" v-if="isSpotifyConnected">
          <spotify-playlist-manager />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

useHead({
  title: "Spotify | V-Atlas",
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
    "Spotify | V-Atlas: Revolutionizing Digital Identity and Data Management",
  description:
    "Discover V-Atlas, a visionary platform using Web5 technology to empower users with secure, flexible virtual storage and identity management. Control your digital presence like never before.",
});

const authStore = useAuthStore();
const { isSpotifyConnected } = storeToRefs(authStore);
</script>

<style scoped></style>
