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
    data: Record<string, unknown>;
  };

export const useWeb5Store = defineStore("web5", () => {
  const { $myDID: did, $web5: web5Instance } = useNuxtApp();
  const { frontendUrl } = useRuntimeConfig();

  async function enableProtocol(protocolDefinition: Record<string, unknown>) {

    const { protocol } = await web5Instance.dwn.protocols.configure({
      message: {
        definition: protocolDefinition
      }
    });

    //sends protocol to remote DWNs immediately (vs waiting for sync)
    await protocol.send(did);

  }


  function resolveSchemaUrl(schema?: string) {
    if (!schema) {
      return undefined;
    }

    return `${frontendUrl}/protocol/${schema}`;
  }

  async function fetchRecords(type: RecordType) {
    const response = await web5Instance.dwn.records.query({
      message: {
        filter: {
          dataFormat: type,
        },
      },
    });

    return response.records

  }

  async function queryRecord() { }

  async function createRecord(options: RecordOptions) {

    await web5Instance.dwn.records.create({
      data: options.data,
      message: {
        dataFormat: options.type,
        schema: resolveSchemaUrl(options.schema),
      },
    });

  }

  async function deleteRecord() { }

  async function grantRecordAccess() { }

  async function revokeRecordAccess() { }

  return {
    enableProtocol,
    fetchRecords,
    queryRecord,
    createRecord,
    deleteRecord,
    grantRecordAccess,
    revokeRecordAccess,
  };
});
