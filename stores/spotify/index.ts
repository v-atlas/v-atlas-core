import { defineStore } from "pinia";
import { useWeb5Store } from "~/stores/web5";

export const useSpotifyStore = defineStore("spotify", () => {
  const web5Store = useWeb5Store();

  async function addPlaylistToAtlas() {}

  async function addAllPlaylistsToAtlas() {}

  async function fetchPlaylistsFromAtlas() {}

  async function sharePlaylist() {}

  return {
    addPlaylistToAtlas,
    addAllPlaylistsToAtlas,
    fetchPlaylistsFromAtlas,
    sharePlaylist,
  };
});
