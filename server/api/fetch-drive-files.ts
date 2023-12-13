import { google } from "googleapis";
import { z } from "zod";

const oauthCredentialSchema = z.object({
  apiKey: z.string(),
});

type OauthCredentialSchema = z.infer<typeof oauthCredentialSchema>;

export default defineEventHandler(async (event) => {
  try {
    const { apiKey } = await readBody<OauthCredentialSchema>(event);
    const oauthClient = google.auth.fromAPIKey(apiKey);

    const drive = google.drive({ version: "v3", auth: oauthClient });
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
      message: "Failed to fetch drive files",
      data: null,
    };
  }
});
