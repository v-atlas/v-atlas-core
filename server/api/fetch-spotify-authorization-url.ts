import { z } from "zod";
import queryString from "querystring";

const SCOPES = [
  "playlist-read-private",
  "playlist-read-collaborative",
];

const oauthSchema = z.object({
  response_type: z.literal("code"),
  client_id: z.string().min(1),
  scope: z.string().min(1),
  redirect_uri: z.string().min(1),
  state: z.string(),
});

type OAuthParams = z.infer<typeof oauthSchema>;

export default defineEventHandler(async (_event) => {
  try {
    const { spotifyClientId, spotifyAccountUrl, spotifyRedirectUrl } =
      useRuntimeConfig();

    const params: OAuthParams = {
      response_type: "code",
      client_id: spotifyClientId,
      scope: SCOPES.join(" "),
      redirect_uri: spotifyRedirectUrl,
      state: generateRandomState(16),
    };

    const oauthParams = oauthSchema.parse(params);
    const stringifiedParams = queryString.stringify(oauthParams);

    const url = `${spotifyAccountUrl}/authorize?${stringifiedParams}`;

    return {
      success: true,
      message: "Successfully generated authorization url",
      url,
    };
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        success: false,
        message: err.issues.join(", "),
        url: "",
      };
    }
  }
  return {
    success: false,
    message: "Failed to generate authorization url",
    url: "",
  };
});

function generateRandomState(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
