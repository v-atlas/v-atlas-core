import { defineStore } from "pinia";
import { Web5, type Record as Web5Record, type ProtocolsConfigureRequest } from "@web5/api"

export const RecordTypes = {
  Text: "text/plain",
  Image: "image/png",
  File: "application/octet-stream",
  Json: "application/json",
} as const;

export type RecordType = (typeof RecordTypes)[keyof typeof RecordTypes];

type ProtocolDefinition = ProtocolsConfigureRequest["message"]["definition"];


type TransformerMethod = <T>(record: Web5Record) => Promise<T | string | Blob | unknown>;

const transformers: { [K in RecordType]: TransformerMethod } = {
  [RecordTypes.Text]: (record: Web5Record) => record.data.text(),
  [RecordTypes.Image]: (record: Web5Record) => record.data.blob(),
  [RecordTypes.File]: (record: Web5Record) => record.data.blob(),
  [RecordTypes.Json]: (record: Web5Record) => record.data.json(),

}

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
  const { $myDID: did, $web5 } = useNuxtApp();
  const { frontendUrl } = useRuntimeConfig();

  let web5Instance: Web5 = $web5;

  async function enableProtocol(protocolDefinition: ProtocolDefinition) {

    const { protocol } = await web5Instance.dwn.protocols.configure({
      message: {
        definition: protocolDefinition
      }
    });

    if (!protocol) {
      throw new Error("Protocol not configured");
    }

    //sends protocol to remote DWNs immediately (vs waiting for sync)
    await protocol.send(did);

  }


  function resolveSchemaUrl(schema?: string) {
    if (!schema) {
      return undefined;
    }

    return `${frontendUrl}/protocol/${schema}`;
  }

  async function fetchRecords<T = unknown>(type: RecordType): Promise<T[]> {
    const response = await web5Instance.dwn.records.query({
      message: {
        filter: {
          dataFormat: type,
        },
      },
    });

    const transformer = transformers[type];

    const data: T[] = []


    for (const record of response?.records ?? []) {
      const transformed = await transformer<T>(record) as T;
      data.push(transformed);
    }

    return data

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
