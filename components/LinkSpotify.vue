<template>
  
  <div class="rounded-lg border-2 border-white/50 p-2">
    <span class="placeholder" v-if="pending">
      Please wait
      <font-awesome-icon icon="fa-solid fa-circle-notch" spin />
    </span>

    <div class="flex flex-row gap-2" v-else>
      <template v-if="data?.success">
        <button
          class="rounded bg-emerald-700 px-4 py-2 font-bold text-white transition-colors duration-200 hover:enabled:bg-emerald-600 disabled:bg-emerald-500/50"
          @click="handleConnectToSpotify"
          :disabled="isSpotifyConnected"
        >
          {{ isSpotifyConnected ? "Connected" : "Connect" }}
          to Spotify
          <font-awesome-icon icon="fa-brands fa-spotify" />
        </button>

        <button
          class="rounded bg-red-500/50 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-red-600/50"
          v-if="isSpotifyConnected"
          @click="handleDisconnectFromSpotify"
        >
          <font-awesome-icon icon="fa-solid fa-times-circle" />
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
