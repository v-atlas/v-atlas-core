<template>
  <div>
    <div class="mb-6 mt-4 flex gap-[10px]">
      <nuxt-link to="/apps" class="rounded-[100px] bg-[#1b1f31] p-[7px]">
        <img src="~/assets/images/previous.svg" alt="previous icon" />
      </nuxt-link>
    </div>
    <div class="flex flex-col">
      <div class="flex w-max flex-col gap-[20px] px-[5px] py-[10px]">
        <link-drive />
      </div>

      <div class="m-1 flex flex-col gap-10">
        <div class="spotify-actions" v-if="isGoogleConnected">
          <google-drive-manager />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

useHead({
  title: "Google Drive | V-Atlas",
  meta: [
    {
      key: "keywords",
      content:
        "V-Atlas, digital identity, Web5, virtual storage, data management, user privacy, decentralized platforms, identity security.",
    },
  ],
});

useSeoMeta({
  title:
    "Google Drive | V-Atlas: Revolutionizing Digital Identity and Data Management",
  description:
    "Discover V-Atlas, a visionary platform using Web5 technology to empower users with secure, flexible virtual storage and identity management. Control your digital presence like never before.",
});

const authStore = useAuthStore();
const { isGoogleConnected } = storeToRefs(authStore);
</script>

<style scoped></style>
