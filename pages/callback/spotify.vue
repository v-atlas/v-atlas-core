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

definePageMeta({
  middleware: "spotify-connect",
});

const route = useRoute();
const authStore = useAuthStore();

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

watch(
  () => pending.value,
  () => {
    if (data?.value?.success) {
      authStore.setSpotifyAccessToken(data.value.token);

      navigateTo("/");
    }
  },
);
</script>

<style scoped></style>
