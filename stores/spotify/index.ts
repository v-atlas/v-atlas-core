import { defineStore } from "pinia";
import { useWeb5Store, RecordTypes } from "~/stores/web5";
import { type SpotifyPlaylistItem } from "~/types"


export const useSpotifyStore = defineStore("spotify", () => {
  const web5Store = useWeb5Store();

  async function addPlaylistToAtlas(playlist: SpotifyPlaylistItem) {
    await web5Store.createRecord({
      data: JSON.stringify(playlist),
      type: RecordTypes.Json,
      schema: "playlist"
    })

  }

  async function addAllPlaylistsToAtlas(playlists: SpotifyPlaylistItem[]) {
    for (const playlist of playlists) {
      await addPlaylistToAtlas(playlist);
      break
    }
  }

  async function fetchPlaylistsFromAtlas() { }

  async function sharePlaylist() { }

  return {
    addPlaylistToAtlas,
    addAllPlaylistsToAtlas,
    fetchPlaylistsFromAtlas,
    sharePlaylist,
  };
});
