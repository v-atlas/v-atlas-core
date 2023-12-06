<template>
  <div class="spotify-playlist-item">
    <div class="top">
      <div class="left">
        <span class="name">{{ playlist.name }}</span>
        <p class="description">
          {{ playlist.description || playlist.name }}
        </p>
      </div>

      <div class="right">
        <a :href="playlist.external_urls.spotify" target="blank">
          View on Spotify
          <font-awesome-icon icon="fa-brands fa-spotify" />
        </a>
      </div>
    </div>
    <div class="bottom">
      <div class="tracks">
        <spotify-tracks-item :tracks="playlist.tracks" />
      </div>

      <div class="actions">
        <button class="action warning">
          Add to My Atlas
          <font-awesome-icon icon="fa-plus" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type SpotifyPlaylistItem } from "~/types";

defineProps<{
  playlist: SpotifyPlaylistItem;
}>();
</script>

<style lang="scss" scoped>
div.spotify-playlist-item {
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-width: 800px;

  div.top {
    padding: 10px;
    border-radius: 5px;

    transition: background-color 0.2s ease-in-out;
    background-color: rgba($color: $primary-green, $alpha: 0.3);

    &:hover {
      background-color: rgba($color: $primary-green, $alpha: 0.5);
    }

    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    gap: 20px;
    div.left {
      span.name {
        font-size: 1.2rem;
        font-weight: bold;
      }

      p.description {
        font-size: 0.9rem;
        font-weight: normal;

        line-height: 1.5;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;

        margin: 0;
        padding: 0;

        max-width: calc(100vw - 100px);

        @media screen and (min-width: 768px) {
          max-width: 500px;
        }
      }
    }

    div.right {
      margin-left: auto;
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        flex-direction: row;
      }
      a {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.9rem;
        font-weight: normal;
        text-decoration: none;
        color: var(--color-primary);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  div.bottom {
  }
}
</style>
