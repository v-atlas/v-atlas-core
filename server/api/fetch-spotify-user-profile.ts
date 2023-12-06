import { FetchError } from "ofetch";
import { z } from "zod";

const fetchProfileSchema = z.object({
  token: z.string(),
});

type FetchProfileSchema = z.infer<typeof fetchProfileSchema>;

type SpotifyProfileResponse = {
  country: string;
  display_name: string;
  email: string;
  explicit_content: {
    filter_enabled: boolean;
    filter_locked: boolean;
  };
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string;
    total: number;
  };
  href: string;
  id: string;
  images: {
    url: string;
    height: number;
    width: number;
  }[];
  product: string;
  type: string;
  uri: string;
};

export default defineEventHandler(async (event) => {
  try {
    const { spotifyApiUrl } = useRuntimeConfig();
    const rawBody = await readBody<FetchProfileSchema>(event);

    const { token } = fetchProfileSchema.parse(rawBody);

    const url = `${spotifyApiUrl}/v1/me`;

    const data = await $fetch<SpotifyProfileResponse>(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      success: true,
      message: "Successfully fetched profile",
      profile: data,
    };
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        success: false,
        message: err.issues.join(", "),
        profile: null,
      };
    }

    if (err instanceof FetchError) {
      return {
        success: false,
        message: err.message,
        profile: null,
      };
    }
  }

  return {
    success: false,
    message: "Failed to fetch profile",
    profile: null,
  };
});
