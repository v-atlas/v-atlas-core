<template>
  <div class="link-spotify-widget">
    <span class="placeholder" v-if="pending">
      Please wait
      <font-awesome-icon icon="fa-solid fa-circle-notch" spin />
    </span>

    <div class="actions" v-else>
      <button
        class="action success"
        @click="handleConnectToSpotify"
        v-if="data?.success"
      >
        Connect to Spotify
        <font-awesome-icon icon="fa-brands fa-spotify" />
      </button>

      <span class="placeholder danger" v-else>
        Spotify is unavailable at this time
        <font-awesome-icon icon="fa-brands fa-spotify" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { pending, data } = useFetch("/api/fetch-spotify-authorization-url");

function handleConnectToSpotify() {
  if (!data.value || !data.value.success) return;

  navigateTo(data.value.url, { external: true });
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
}
</style>
