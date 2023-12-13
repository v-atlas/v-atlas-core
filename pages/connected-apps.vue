<template>
  <div>
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

const authStore = useAuthStore();
const { isSpotifyConnected } = storeToRefs(authStore);
</script>

<style lang="scss" scoped>

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
</style>