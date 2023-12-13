import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const spotifyAccessToken = ref<string>("");
    const googleDriveAccessToken = ref<string>("");

    const isSpotifyConnected = computed<boolean>(() =>
      Boolean(spotifyAccessToken.value && spotifyAccessToken.value.length > 0),
    );

    const isGoogleConnected = computed<boolean>(() =>
      Boolean(googleDriveAccessToken.value && googleDriveAccessToken.value.length > 0),
    );

    function setSpotifyAccessToken(token: string) {
      spotifyAccessToken.value = token;
    }

    function clearSpotifyAccessToken() {
      spotifyAccessToken.value = "";
    }

    function setGoogleDriveAccessToken(token: string) {
      googleDriveAccessToken.value = token;
    }

    function clearGoogleDriveAccessToken() {
      googleDriveAccessToken.value = "";
    }

    return {
      spotifyAccessToken,
      isSpotifyConnected,
      googleDriveAccessToken,
      isGoogleConnected,
      setSpotifyAccessToken,
      clearSpotifyAccessToken,
      setGoogleDriveAccessToken,
      clearGoogleDriveAccessToken,
    };
  },
  {
    persist: {
      paths: ["spotifyAccessToken", "googleDriveAccessToken"],
      storage: persistedState.cookiesWithOptions({
        sameSite: "strict",
      }),
    },
  },
);
