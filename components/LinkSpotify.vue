<template>
  <div>
    <span class="placeholder" v-if="pending">
      Please wait
      <font-awesome-icon icon="fa-solid fa-circle-notch" spin />
    </span>

    <div class="relative flex flex-row gap-2" v-else>
      <template v-if="data?.success">
        <button
          class="relative flex items-center gap-[17px] overflow-hidden rounded-[10px] bg-primary px-[21px] py-3 transition duration-300 ease-in-out hover:bg-[#1dd35d4d] disabled:hover:bg-primary"
          @click="handleConnectToSpotify"
          :class="{ 'pr-12': isSpotifyConnected }"
          :disabled="isSpotifyConnected"
        >
          <div
            class="absolute -left-20 -top-20 h-32 w-32 rounded-[64px] bg-[#1DD35E99] blur-[84px]"
          ></div>
          <img
            class="h-12 w-12"
            src="~/assets/images/spotify.svg"
            alt="spotify icon"
          />
          {{ isSpotifyConnected ? "Connected" : "Connect" }}
          to Spotify
        </button>

        <button
          class="absolute right-3 top-[9px]"
          v-if="isSpotifyConnected"
          @click="handleDisconnectFromSpotify"
        >
          <font-awesome-icon
            icon="fa-solid fa-times-circle"
            class="text-subdued transition-colors duration-300 hover:text-gray-800"
          />
        </button>
      </template>

      <span class="rounded-md bg-red-500 p-2 text-sm font-bold" v-else>
        Spotify is unavailable at this time
        <font-awesome-icon icon="fa-brands fa-spotify" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
const { pending, data } = useFetch("/api/fetch-spotify-authorization-url");

const authStore = useAuthStore();
const { isSpotifyConnected } = storeToRefs(authStore);

function handleConnectToSpotify() {
  if (!data.value || !data.value.success) return;

  navigateTo(data.value.url, { external: true });
}

function handleDisconnectFromSpotify() {
  authStore.clearSpotifyAccessToken();
}
</script>

<style scoped></style>
