import { FetchError } from "ofetch";
import { z } from "zod";
import { SpotifyPlaylistAPIResponse } from "~/types";

const fetchAccountPlaylistSchema = z.object({
  token: z.string(),
});

type FetchAccountPlaylist = z.infer<typeof fetchAccountPlaylistSchema>;

export default defineEventHandler(async (event) => {
  try {
    const { spotifyApiUrl } = useRuntimeConfig();
    const rawBody = await readBody<FetchAccountPlaylist>(event);

    const { token } = fetchAccountPlaylistSchema.parse({
      token: rawBody.token,
    });

    const userProfile = await $fetch("/api/fetch-spotify-user-profile", {
      method: "POST",
      body: JSON.stringify({ token }),
    });

    if (!userProfile.success) {
      return {
        success: false,
        message: userProfile.message,
        data: null,
      };
    }

    if (!userProfile.profile) {
      return {
        success: false,
        message: "Something went wrong - Unable to fetch profile",
        data: null,
      };
    }

    const {
      profile: { id: user_id },
    } = userProfile;

    const url = `${spotifyApiUrl}/v1/users/${user_id}/playlists`;

    const data = await $fetch<SpotifyPlaylistAPIResponse>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
    });

    return {
      success: true,
      message: "Successfully fetched profile",
      data,
    };
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        success: false,
        message: err.issues.join(", "),
        data: null,
      };
    }

    if (err instanceof FetchError) {
      return {
        success: false,
        message: `Fetch Error - ${err.message}`,
        data: null,
      };
    }

    if (err instanceof Error) {
      return {
        success: false,
        message: err.message,
        data: null,
      };
    }

    return {
      success: false,
      message: "Failed to fetch profile",
      data: null,
    };
  }
});
