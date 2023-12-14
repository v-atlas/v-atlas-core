import { defineStore } from "pinia";
import { useWeb5Store, RecordTypes } from "~/stores/web5";
import { type SpotifyPlaylistItem } from "~/types"
import spotifyProtocolDefinition from "~/assets/protocols/spotify.json"
import { SpotifyPlaylistItemSchema } from "./schemas"


export const useSpotifyStore = defineStore("spotify", () => {
  const web5Store = useWeb5Store();

  async function enableProtocol() {
    await web5Store.enableProtocol(spotifyProtocolDefinition);
  }

  async function addPlaylistToAtlas(playlist: SpotifyPlaylistItem) {
    await web5Store.createRecord({
      data: playlist,
      type: RecordTypes.Json,
      schema: "playlist"
    })

  }

  async function addAllPlaylistsToAtlas(playlists: SpotifyPlaylistItem[]) {
    for (const playlist of playlists) {
      await addPlaylistToAtlas(playlist);
    }
  }

  async function fetchPlaylistsFromAtlas(): Promise<SpotifyPlaylistItem[]> {
    const playlists = await web5Store.fetchRecords<SpotifyPlaylistItem>(RecordTypes.Json)

    const validatedPlaylists: SpotifyPlaylistItem[] = playlists.map((item) => {
      try {
        const playlist = SpotifyPlaylistItemSchema.parse(item)
        return playlist
      } catch (_) {
        return null
      }
    }).filter(nullishFilter)


    return validatedPlaylists
  }

  async function sharePlaylist() { }

  return {
    enableProtocol,
    addPlaylistToAtlas,
    addAllPlaylistsToAtlas,
    fetchPlaylistsFromAtlas,
    sharePlaylist,
  };
});
