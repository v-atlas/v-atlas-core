import { OAuth2Client, type OAuth2ClientOptions } from "google-auth-library"

const SCOPES = {
  Drive: "https://www.googleapis.com/auth/drive"
} as const;

export default defineEventHandler(async (_event) => {
  try {
    const { googleCloudClientId, googleCloudClientSecret, googleCloudRedirectUrl } =
      useRuntimeConfig();

    const oauthOptions: OAuth2ClientOptions = {
      clientId: googleCloudClientId,
      clientSecret: googleCloudClientSecret,
    }

    const client = new OAuth2Client(oauthOptions);

    const authorizationUrl = client.generateAuthUrl({
      redirect_uri: googleCloudRedirectUrl,
      access_type: 'offline',
      scope: [SCOPES.Drive],
    });


    if (!authorizationUrl) {
      throw new Error("Failed to generate authorization URL");
    }

    return {
      success: true,
      message: "Successfully authenticated Google account",
      url: authorizationUrl,
    };
  } catch (err) {

    if (err instanceof Error) {
      return {
        success: false,
        message: err.message,
        url: null,
      };
    }


    return {
      success: false,
      message: "Failed to authenticate Google account",
      url: null,
    };
  }
});
