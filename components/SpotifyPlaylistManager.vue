<template>
  <div class="spotify-playlist-manager">
    <div class="actions">
      <button
        class="action secondary"
        :disabled="playlistFetchStatus === 'pending'"
        @click="handleDownloadPlaylist"
      >
        Sync Playlists

        <font-awesome-icon
          icon="fa-solid fa-circle-notch"
          spin
          v-if="playlistFetchStatus === 'pending'"
        />
        <font-awesome-icon icon="fa-download" v-else />
      </button>

      <button class="action warning" v-if="playlistAvailable">
        Copy to My Atlas
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>

    <div class="playlists">
      <spotify-playlist-item
        v-for="item of playlistData?.data?.items"
        :playlist="item"
      />
    </div>
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

const handleDownloadPlaylist = () => downloadPlayload({});

const playlistAvailable = computed<boolean>(() => {
  if (playlistData.value?.data) {
    if (playlistData.value.data.items.length > 0) {
      return true;
    }
  }

  return false;
});
</script>

<style lang="scss" scoped>
div.spotify-playlist-manager {
  display: flex;
  flex-direction: column;
  gap: 50px;

  div.actions {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  div.playlists {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
