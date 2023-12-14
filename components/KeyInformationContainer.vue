<template>
  <div class="flex flex-col gap-10">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
      <div
        class="relative flex gap-[17px] overflow-hidden rounded-[10px] bg-primary px-[21px] py-[26px]"
      >
        <div
          class="absolute -left-20 -top-20 h-32 w-32 rounded-[64px] bg-[#1DD35E99] blur-[84px]"
        ></div>
        <div class="icon-container">
          <img src="~/assets/images/spotify.svg" alt="icon" />
        </div>
        <div>
          <h3 class="relative z-10 text-sm text-subdued">
            Total Playlist Imported
          </h3>
          <p class="relative z-10 text-2xl text-white">
            {{ totalPlaylistsImported }}
          </p>
        </div>
      </div>
      <div
        class="relative flex gap-[17px] overflow-hidden rounded-[10px] bg-primary px-[21px] py-[26px]"
      >
        <div
          class="absolute -left-20 -top-20 h-32 w-32 rounded-[64px] bg-[#FF5B3F99] blur-[84px]"
        ></div>
        <div class="icon-container">
          <img src="~/assets/images/drive.svg" alt="icon" />
        </div>
        <div>
          <h3 class="relative z-10 text-sm text-subdued">
            Total File downloaded
          </h3>
          <p class="relative z-10 text-2xl text-white">
            0
          </p>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script lang="ts" setup>
import { keyInformationData } from "~/data/KeyInformation";
import { useSpotifyStore } from "~/stores/spotify";

const spotifyStore = useSpotifyStore();

const totalPlaylistsImported = ref<number>(0);

async function fetchSpotifySummary() {
  await spotifyStore.enableProtocol();
  const records = await spotifyStore.fetchPlaylistsFromAtlas();
  totalPlaylistsImported.value = records.length;
}

onMounted(() => {
  fetchSpotifySummary();
});
</script>

<style scoped>
.icon-container {
  width: 54px;
  height: 54px;
}
.icon {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
