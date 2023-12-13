import { defineStore } from "pinia";

export const RecordTypes = {
  Text: "text/plain",
  Image: "image/png",
  File: "application/octet-stream",
  Json: "application/json",
} as const;

export type RecordType = (typeof RecordTypes)[keyof typeof RecordTypes];

export type RecordOptions =
  | {
    data: string | Blob;
    schema?: string;
    type: RecordType;
  }
  | {
    type: "text/plain";
    data: string;
    schema: undefined;
  }
  | {
    type: "image/png";
    data: Blob;
    schema: undefined;
  }
  | {
    type: "application/octet-stream";
    data: Blob;
    schema: string;
  }
  | {
    type: "application/json";
    schema?: string;
    data: string;
  };

export const useWeb5Store = defineStore("web5", () => {
  const { $myDID: did, $web5: web5Instance } = useNuxtApp();
  const { frontendUrl } = useRuntimeConfig();


  function resolveSchemaUrl(schema?: string) {
    if (!schema) {
      return undefined;
    }

    return `${frontendUrl}/protocol/${schema}`;
  }

  async function fetchRecord() { }

  async function queryRecord() { }

  async function createRecord(options: RecordOptions) {

    const { record } = await web5Instance.dwn.records.create({
      data: options.data,
      message: {
        dataFormat: options.type,
        schema: resolveSchemaUrl(options.schema),
      },
    });

    console.log(record);
  }

  async function deleteRecord() { }

  async function grantRecordAccess() { }

  async function revokeRecordAccess() { }

  return {
    fetchRecord,
    queryRecord,
    createRecord,
    deleteRecord,
    grantRecordAccess,
    revokeRecordAccess,
  };
});
