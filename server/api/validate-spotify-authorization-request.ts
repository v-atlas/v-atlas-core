import { z } from "zod";

const callbackSchema = z.object({
  code: z.string(),
  state: z.string(),
});

type CallbackSchema = z.infer<typeof callbackSchema>;

type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
};

export default defineEventHandler(async (event) => {
  try {
    const {
      spotifyClientId,
      spotifyClientSecret,
      spotifyApiUrl,
      spotifyRedirectUrl,
    } = useRuntimeConfig();

    const rawBody = await readBody<CallbackSchema>(event);
    const body = callbackSchema.parse(rawBody);

    const url = `${spotifyApiUrl}/api/token`;

    const basicAuthorization = Buffer.from(
      `${spotifyClientId}:${spotifyClientSecret}`
    ).toString("base64");

    const formData = new URLSearchParams();

    formData.append("code", body.code);
    formData.append("redirect_uri", spotifyRedirectUrl);
    formData.append("grant_type", "authorization_code");

    const { access_token } = await $fetch<SpotifyTokenResponse>(url, {
      headers: {
        // "content-type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuthorization}`,
      },
      method: "POST",
      body: formData,
    });

    return {
      success: true,
      message: "Successfully validated authorization request",
      token: access_token,
    };
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        success: false,
        message: err.issues.join(", "),
        token: "",
      };
    }
  }

  return {
    success: false,
    message: "Failed to validate authorization request",
    token: "",
  };
});
