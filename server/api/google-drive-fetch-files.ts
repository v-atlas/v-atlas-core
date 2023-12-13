import { google } from "googleapis";
import { z } from "zod";

const oauthCredentialSchema = z.object({
  accessToken: z.string(),
});

type OauthCredentialSchema = z.infer<typeof oauthCredentialSchema>;

export default defineEventHandler(async (event) => {
  try {
    const { accessToken } = await readBody<OauthCredentialSchema>(event);
    const authClient = google.auth.fromAPIKey(accessToken);

    const drive = google.drive({ version: "v3", auth: authClient });

    const res = await drive.files.list({
      pageSize: 10,
      fields: "nextPageToken, files(id, name)",
    });

    const files = res.data.files;
    return {
      success: true,
      message: "Successfully generated authorization url",
      files,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.issues.join(", "),
        files: null,
      };
    }

    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
        files: null
      };
    }
    return {
      success: false,
      message: "Failed to fetch drive files",
      files: null,
    };
  }
});
