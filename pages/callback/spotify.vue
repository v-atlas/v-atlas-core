<template>
  <div class="spotify-callback">
    <div class="content">
      <div class="feedback">
        <template v-if="pending">
          <font-awesome-icon icon="fa-solid fa-circle-notch" spin />
        </template>

        <template v-else>
          <div class="actions" v-if="!data?.success">
            <nuxt-link to="/">Go Home</nuxt-link>
          </div>

          <p class="message">
            {{ data?.message }}
          </p>

          <font-awesome-icon
            icon="fa-solid fa-check-circle"
            v-if="data?.success"
          />

          <font-awesome-icon icon="fa-solid fa-times-circle" v-else />
        </template>
      </div>
    </div>
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
  }
);

watch(
  () => pending.value,
  () => {
    console.log(data?.value?.success);
    if (data?.value?.success) {
      authStore.setSpotifyAccessToken(data.value.token);

      navigateTo("/");
    }
  }
);
</script>

<style lang="scss" scoped>
div.spotify-callback {
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 100%;

  div.content {
    display: flex;
    flex-direction: column;
    max-width: 500px;

    div.feedback {
      display: flex;
      flex-direction: column;
      gap: 10px;

      svg {
        font-size: 3rem;
        margin: 0 auto;
      }
      p.message {
        font-size: 1rem;
        font-weight: 500;
      }
    }

    div.actions {
      display: flex;
      flex-direction: column;
      gap: 10px;

      a {
        text-decoration: none;
        color: $primary-blue;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
      }
    }
  }
}
</style>