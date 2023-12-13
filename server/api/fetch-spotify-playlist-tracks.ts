import { FetchError } from "ofetch";
import { z } from "zod";
import { SpotifyTracksAPIResponse } from "~/types";

const fetchPlatlistTrackSchema = z.object({
  href: z.string().url(),
  token: z.string(),
});

type FetchPlaylistTrackSchema = z.infer<typeof fetchPlatlistTrackSchema>;

export default defineEventHandler(async (event) => {
  try {
    const rawBody = await readBody<FetchPlaylistTrackSchema>(event);

    const { token, href } = fetchPlatlistTrackSchema.parse(rawBody);

    const data = await $fetch<SpotifyTracksAPIResponse>(href, {
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
      message: "Failed to fetch playlist tracks",
      data: null,
    };
  }
});
