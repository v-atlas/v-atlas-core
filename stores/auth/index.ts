import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const spotifyAccessToken = ref<string>("");
    const isSpotifyConnected = computed<boolean>(() =>
      Boolean(spotifyAccessToken.value && spotifyAccessToken.value.length > 0),
    );

    const googleClientApiKey = ref<string>("");
    const isGoogleConnected = computed<boolean>(() =>
      Boolean(googleClientApiKey.value && googleClientApiKey.value.length > 0),
    );

    function setSpotifyAccessToken(token: string) {
      spotifyAccessToken.value = token;
    }

    function clearSpotifyAccessToken() {
      spotifyAccessToken.value = "";
    }

    function setGoogleClientApiKey(apiKey: string) {
      googleClientApiKey.value = apiKey;
    }

    function clearGoogleClientApiKey() {
      googleClientApiKey.value = "";
    }

    return {
      spotifyAccessToken,
      isSpotifyConnected,
      googleClientApiKey,
      isGoogleConnected,
      setSpotifyAccessToken,
      clearSpotifyAccessToken,
      setGoogleClientApiKey,
      clearGoogleClientApiKey,
    };
  },
  {
    persist: {
      paths: ["spotifyAccessToken"],
      storage: persistedState.cookiesWithOptions({
        sameSite: "strict",
      }),
    },
  },
);
