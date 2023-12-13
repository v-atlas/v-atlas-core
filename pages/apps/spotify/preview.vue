<template>
  <div>
    <div
      class="mb-[50px] flex items-center gap-10 rounded-[10px] bg-primary p-[14px]"
    >
      <div class="relative rounded-[10px] bg-gray-800">
        <img
          src="~/assets/images/youtube.svg"
          alt="album image"
          class="h-[150px] w-[150px] rounded-[10px] lg:h-[300px] lg:w-[300px]"
        />
        <div
          class="details-box absolute bottom-0 left-0 right-0 mx-auto w-[80%] rounded-t-[11.3px] border-x border-t border-[#ffffff4e] p-4"
        >
          <h4 class="line-clamp-1">Top songs 2023</h4>
          <p class="line-clamp-1 text-xs text-[#FFFFFF9E]">
            Hip-Hop || 32 Tracks
          </p>
        </div>
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
.details-box {
  -webkit-backdrop-filter: blur(22.69px) brightness(100%);
  backdrop-filter: blur(22.69px) brightness(100%);
  background-color: #ffffff33;
}
</style>
