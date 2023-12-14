<template>
  <div class="flex flex-col justify-center px-10 align-middle md:px-20">
    <template v-if="pending">
      <font-awesome-icon
        icon="fa-solid fa-circle-notch"
        class="absolute left-1/2 top-1/2 m-auto -ml-3 translate-x-1/2 translate-y-1/2 transform text-4xl md:ml-24"
        spin
      />
    </template>

    <template v-else>
      <div class="m-auto flex max-w-fit flex-col gap-2 p-24">
        <p class="max-w-md text-sm" v-if="!data?.success">
          {{ data?.message ?? "Unable to authorize Spotify" }}
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
import { useSpotifyStore } from "~/stores/spotify";

useHead({
  title: "Spotify Integration | V-Atlas",
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
    "Spotify Integration | V-Atlas: Revolutionizing Digital Identity and Data Management",
  description:
    "Discover V-Atlas, a visionary platform using Web5 technology to empower users with secure, flexible virtual storage and identity management. Control your digital presence like never before.",
});

definePageMeta({
  middleware: "spotify-connect",
});

const route = useRoute();
const authStore = useAuthStore();
const spotifyStore = useSpotifyStore();

const callbackSchema = z.object({
  code: z.string(),
  state: z.string(),
});

const { code, state } = callbackSchema.parse(route.query);

const { pending, data } = await useLazyFetch(
  "/api/validate-spotify-authorization-request",
  {
    server: false,
    method: "POST",
    body: JSON.stringify({ code, state }),
  },
);

async function setAndNavigate(token: string) {
  authStore.setSpotifyAccessToken(token);
  await spotifyStore.enableProtocol();
  navigateTo("/apps");
}

watch(
  () => pending.value,
  async () => {
    if (data?.value?.success) {
      await setAndNavigate(data.value.token);
    }
  },
);
</script>

<style scoped></style>
