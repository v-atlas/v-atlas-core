import { google } from "googleapis";
import { z } from "zod";

const googleDriveAuthorizationSchema = z.object({
  accessToken: z.string(),
});

type GoogleDriveAuthorizationOptions = z.infer<typeof googleDriveAuthorizationSchema>;

export default defineEventHandler(async (event) => {
  try {

    const { googleCloudClientId, googleCloudClientSecret, googleCloudRedirectUrl } =
      useRuntimeConfig();

    const rawBody = await readBody<GoogleDriveAuthorizationOptions>(event);
    const { accessToken } = googleDriveAuthorizationSchema.parse(rawBody)

    const authClient = new google.auth.OAuth2(googleCloudClientId, googleCloudClientSecret, googleCloudRedirectUrl);


    authClient.setCredentials({
      refresh_token: accessToken
    })


    const drive = google.drive({ version: "v3", auth: authClient });

    const { data } = await drive.files.list({
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    });


    return {
      success: true,
      message: "Successfully fetched files from Google Drive",
      data,
    };
  } catch (error) {


    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.issues.join(", "),
        data: null,
      };
    }

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
        data: null,
      };
    }
    return {
      success: false,
      message: "Failed to fetch Google Drive files",
      data: null,
    };
  }
});
