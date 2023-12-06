<template>
  <div class="spotify-playlist-item">
    <div class="top">
      <div class="image">
        <img
          v-if="playlist.images.length > 0"
          :src="playlist.images[0].url"
          alt="Playlist Cover" />
        <img v-else src="~/assets/images/spotify.png" alt="Fallback Image" />
      </div>
      <div class="left">
        <span class="name">{{ playlist.name }}</span>
        <p class="description">
          {{ playlist.description || playlist.name }}
        </p>
      </div>

      <div class="right">
        <p>{{ playlist.tracks.total }} Tracks</p>
        <div class="buttons">
          <div>
            <a :href="playlist.external_urls.spotify" target="blank">
              View on Spotify
              <font-awesome-icon icon="fa-brands fa-spotify" />
            </a>
          </div>
          <button class="action warning">
            Add to My Atlas
            <font-awesome-icon icon="fa-plus" />
          </button>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="tracks">
        <spotify-tracks-item :tracks="playlist.tracks" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type SpotifyPlaylistItem } from '~/types';

defineProps<{
  playlist: SpotifyPlaylistItem;
}>();
</script>

<style lang="scss" scoped>
div.spotify-playlist-item {
  display: flex;
  gap: 10px;
  flex-direction: column;

  div.top {
    position: relative;
    padding: 10px;
    border-radius: 5px;

    transition: background-color 0.2s ease-in-out;
    background-color: rgba($color: $primary-green, $alpha: 0.3);

    &:hover {
      background-color: rgba($color: $primary-green, $alpha: 0.5);
    }

    display: flex;
    flex-direction: column;
    min-height: 290px;
    gap: 20px;

    @media screen and (min-width: 1051px) {
      flex-direction: row;
      align-items: center;
      min-height: fit-content;
      min-height: 150px;
    }
    div.left {
      width: 220px;
      span.name {
        font-size: 1.2rem;
        font-weight: bold;
        line-height: 1.5;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Number of lines to show */
        -webkit-box-orient: vertical;
        max-width: 250px;
        margin: 0;
        padding: 0;
      }

      p.description {
        font-size: 0.9rem;
        font-weight: normal;
        line-height: 1.5;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Number of lines to show */
        -webkit-box-orient: vertical;
        max-width: 250px;
        margin: 0;
        padding: 0;

        @media screen and (min-width: 1051px) {
          max-width: 150px;
        }
      }

      @media (min-width: 1051px) and (max-width: 1199px) {
        width: 160px;
      }
    }

    div.image {
      max-width: 25%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 2px solid $primary-light;
        border-radius: 5px;
      }
    }

    div.right {
      position: absolute;
      bottom: 0px;
      right: 10px;
      text-align: end;

      .buttons {
        display: flex !important;
        gap: 10px;

        @media (min-width: 600px) and (max-width: 768px) {
          flex-direction: column;
          gap:5px;
        }
        @media (min-width: 1051px) and (max-width: 1400px) {
          flex-direction: column;
          gap: 5px;
        }
      }

      a {
        flex-direction: row;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        font-size: 0.9rem;
        font-weight: normal;
        text-decoration: none;
        color: var(--color-primary);
        background-color: $primary-green;
        padding: 15px 10px;
        border-radius: 10px;
        transition: all 0.3s ease-in-out;
        margin-bottom: 5px;

        &:hover {
          text-decoration: underline;
          transform: scale(1.1);
        }
      }

      button {
        border-radius: 10px;
        font-size: 0.9rem;
        padding: 8px 10px;
        transition: all 0.3s ease-in-out;
        margin-bottom: 10px;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  div.bottom {
  }
}
</style>
