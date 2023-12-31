<template>
  <div
    class="flex min-h-screen flex-col justify-center px-10 align-middle md:px-20"
  >
    <template v-if="pending">
      <font-awesome-icon
        icon="fa-solid fa-circle-notch"
        class="text-4xl"
        spin
      />
    </template>

    <template v-else>
      <div class="m-auto flex max-w-fit flex-col gap-2">
        <p class="max-w-md text-sm" v-if="!data?.success">
          {{ data?.message ?? "Unable to authorize Google Drive" }}
        </p>
        <div class="actions" v-if="!data?.success">
          <nuxt-link to="/" class="font-bold text-white no-underline">
            Go Home
          </nuxt-link>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { z } from "zod";
import { useAuthStore } from "~/stores/auth";

useHead({
  title: "Google Drive Integration | V-Atlas",
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
    "Google Drive Integration | V-Atlas: Revolutionizing Digital Identity and Data Management",
  description:
    "Discover V-Atlas, a visionary platform using Web5 technology to empower users with secure, flexible virtual storage and identity management. Control your digital presence like never before.",
});

definePageMeta({
  middleware: "google-connect",
});

const route = useRoute();
const authStore = useAuthStore();

const callbackSchema = z.object({
  code: z.string(),
});

const { code } = callbackSchema.parse(route.query);

const { pending, data } = await useLazyFetch(
  "/api/google-drive-validate-authorization-request",
  {
    server: false,
    method: "POST",
    body: {
      code,
    },
  },
);

watch(
  () => pending.value,
  () => {
    if (data?.value?.success) {
      authStore.setGoogleDriveAccessToken(data.value.token);

      navigateTo("/apps");
    }
  },
);
</script>

<style scoped></style>
