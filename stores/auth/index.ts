import { Web5 } from "@web5/api";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  async function startSession() {
    const { web5, did: aliceDid } = await Web5.connect();
  }

  return {
    startSession,
  };
});
