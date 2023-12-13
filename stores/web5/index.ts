import { defineStore } from "pinia";

export const useWeb5Store = defineStore("web5", () => {
  const { $myDID: did, $web5: web5Instance } = useNuxtApp();

  async function fetchData() {}

  async function queryData() {}

  async function setData() {}

  async function deleteData() {}

  async function grantAccess() {}

  async function revokeAccess() {}

  return {
    fetchData,
    queryData,
    setData,
    deleteData,
    revokeAccess,
  };
});
