import { z } from "zod";
import { OAuth2Client, type OAuth2ClientOptions } from "google-auth-library"


const callbackSchema = z.object({
  code: z.string(),
});

type CallbackSchema = z.infer<typeof callbackSchema>;


export default defineEventHandler(async (event) => {
  try {
    const { googleCloudClientId, googleCloudClientSecret, googleCloudRedirectUrl } =
      useRuntimeConfig();

    const rawBody = await readBody<CallbackSchema>(event);
    const body = callbackSchema.parse(rawBody);


    const oauthOptions: OAuth2ClientOptions = {
      clientId: googleCloudClientId,
      clientSecret: googleCloudClientSecret,
    }

    const client = new OAuth2Client(oauthOptions);
    const { tokens } = await client.getToken({
      code: body.code,
      redirect_uri: googleCloudRedirectUrl
    })

    client.credentials = tokens;

    const accessTokenResponse = await client.getAccessToken()

    if (!accessTokenResponse.token) {
      throw new Error(accessTokenResponse.res?.statusText || "Failed to get access token")
    }


    return {
      success: true,
      message: "Successfully validated authorization request",
      token: accessTokenResponse.token,
    };
  } catch (err) {
    if (err instanceof z.ZodError) {
      return {
        success: false,
        message: err.issues.join(", "),
        token: "",
      };
    }

    if (err instanceof Error) {
      return {
        success: false,
        message: err.message,
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
