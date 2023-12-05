import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const spotifyAccessToken = ref<string>("");
    const isSpotifyConnected = computed<boolean>(() =>
      Boolean(spotifyAccessToken.value && spotifyAccessToken.value.length > 0)
    );

    function setSpotifyAccessToken(token: string) {
      spotifyAccessToken.value = token;
    }

    function clearSpotifyAccessToken() {
      spotifyAccessToken.value = "";
    }

    return {
      spotifyAccessToken,
      isSpotifyConnected,
      setSpotifyAccessToken,
      clearSpotifyAccessToken,
    };
  },
  {
    persist: {
      paths: ["spotifyAccessToken"],
      storage: persistedState.cookiesWithOptions({
        sameSite: "strict",
      }),
    },
  }
);
