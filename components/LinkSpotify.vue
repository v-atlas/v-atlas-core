<template>
  <div class="link-spotify-widget">
    <span class="placeholder" v-if="pending">
      Please wait
      <font-awesome-icon icon="fa-solid fa-circle-notch" spin />
    </span>

    <div class="actions" v-else>
      <template v-if="data?.success">
        <button
          class="action success"
          @click="handleConnectToSpotify"
          :disabled="isSpotifyConnected"
        >
          {{ isSpotifyConnected ? "Connected" : "Connect" }}
          to Spotify
          <font-awesome-icon icon="fa-brands fa-spotify" />
        </button>

        <button
          class="action danger icon"
          v-if="isSpotifyConnected"
          @click="handleDisconnectFromSpotify"
        >
          <font-awesome-icon icon="fa-solid fa-times-circle" />
        </button>
      </template>

      <span class="placeholder danger" v-else>
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

<style lang="scss" scoped>
div.link-spotify-widget {
  span.placeholder {
    font-size: 0.9rem;
    background-color: $primary-dark;
    color: $primary-light;
    padding: 10px 20px;
    border-radius: 5px;

    text-transform: capitalize;

    &.danger {
      background-color: $primary-red;
    }

    svg {
      font-size: 1rem;
      margin-left: 10px;
    }
  }

  div.actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
}
</style>
