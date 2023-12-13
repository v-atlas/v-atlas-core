<template>
  <div>
    <div class="flex gap-10 items-center bg-primary p-[14px] rounded-[10px] mb-[50px]">
     <div class="relative rounded-[10px] bg-gray-800"><img src="~/assets/images/youtube.svg" alt="album image" class="rounded-[10px] w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] ">   <div
        class="details-box absolute bottom-0 left-0 right-0 mx-auto w-[80%] rounded-t-[11.3px] border-x border-t border-[#ffffff4e] p-4"
      >
        <h4 class="line-clamp-1">Top songs 2023</h4>
        <p class="line-clamp-1 text-xs text-[#FFFFFF9E]">
          Hip-Hop || 32 Tracks
        </p>
      </div></div>
     <div class="space-y-2">
      <h2 class="text-2xl lg:text-5xl line-clamp-2">Your Top Songs of 2023</h2>
      <p class="text-subdued text-base md:text-lg lg:text-3xl">Spotify Wrapped</p>
      <div class="text-subdued text-xs md:text-base">
        <span>32 songs</span><span class="mx-1">.</span><span>1hour 32mins</span>
      </div>
     </div>
      </div>
    <play-songs v-for="item of playlistData?.data?.items"
        :playlist="item" :key="item?.id"/>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

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