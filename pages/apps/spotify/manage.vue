<template>
  <div class="landing">
    <div class="content">
      <div class="actions">
        <link-spotify />
      </div>

      <div class="action-content">
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

<style lang="scss" scoped>
div.landing {
  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }

  div.content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    div.actions {
      display: flex;
      flex-direction: row;
      gap: 20px;

      // background-color: rgba($color: $primary-dark, $alpha: 0.2);
      padding: 10px 5px;

      width: max-content;
    }

    div.action-content {
      padding: 10px;

      // background-color: rgba($color: $primary-dark, $alpha: 0.2);

      &:empty {
        display: none;
      }
    }
  }
}
</style>
