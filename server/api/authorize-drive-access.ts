import { authenticate } from "@google-cloud/local-auth";
import fs from "fs";
import path from "path";

const generateCredentailsFile = (clientId: string, clientSecret: string) => {
  const credPath = path.join(process.cwd(), "credentials.json");
  if (fs.existsSync(credPath)) {
    return credPath;
  }

  const credentialData = {
    web: {
      client_id: clientId,
      project_id: "vatlas",
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_secret: clientSecret,
      redirect_uris: ["https://my.vatlas.dev"],
      javascript_origins: ["https://my.vatlas.dev"],
    },
  };

  const credentialDataJSON = JSON.stringify(credentialData, null, 2);
  fs.writeFileSync("credentials.json", credentialDataJSON);

  return path.join(process.cwd(), "credentials.json");
};

export default defineEventHandler(async (_event) => {
  try {
    const { googleClientId, googleClientSecret, googleDriveApiUrl } =
      useRuntimeConfig();

    const CREDENTIALPATH = generateCredentailsFile(
      googleClientId,
      googleClientSecret,
    );

    const client = await authenticate({
      scopes: [googleDriveApiUrl],
      keyfilePath: CREDENTIALPATH,
    });

    return {
      type: "authorized_user",
      client_id: googleClientId,
      client_secret: googleClientSecret,
      refresh_token: client.credentials.refresh_token,
    };
  } catch (error) {}
});
