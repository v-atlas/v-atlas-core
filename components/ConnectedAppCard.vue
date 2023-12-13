<template>
  <div class="rounded-[10px] bg-secondary p-6 pb-7">
    <div class="flex flex-row justify-between">
      <div v-if="icon">
        <component :is="icon"></component>
      </div>
      <div class="block">
        <div v-if="isConnected" class="flex flex-row gap-2">
          <div
            class="flex h-[29px] items-center justify-center gap-x-1 rounded-md border border-emerald bg-emerald-950 pb-[2px] pl-2 pr-3"
          >
            <div class="h-2 w-2 rounded-full bg-emerald"></div>
            <p class="text-[10px] leading-none text-emerald">Connected</p>
          </div>
        </div>

        <div
          v-else
          class="flex h-[29px] items-center justify-center gap-x-1 rounded-md border border-broom bg-broom-950 pb-0.5 pl-2 pr-3"
        >
          <div class="h-2 w-2 rounded-full bg-broom"></div>
          <p class="text-[10px] leading-none text-broom">Not connected</p>
        </div>
      </div>
    </div>
    <div class="mt-3 flex h-fit flex-col gap-2">
      <h3 class="text-white">{{ app.type }}</h3>
      <p class="mb-4 w-11/12 text-sm text-athens-gray-600">
        {{ app.description }}
      </p>

      <span
        v-if="loading"
        class="text-md h-11 rounded-md bg-athens-gray-800 p-2 text-center text-white/90"
      >
        <font-awesome-icon
          icon="fa-solid fa-circle-notch"
          class="my-auto"
          spin
        />
      </span>

      <template v-else>
        <div v-if="isConnected" class="flex flex-row gap-2">
          <NuxtLink
            :to="app.link"
            class="mt-auto flex w-10/12 justify-center rounded-md bg-athens-gray-800 px-7 py-2.5 text-center text-white/90 transition-colors duration-200 hover:bg-athens-gray-950"
          >
            Manage
          </NuxtLink>

          <button
            @click="handleAppDisconnect"
            class="mt-auto h-11 w-2/12 rounded-md bg-red-800/50 text-white/90 transition-colors duration-200 hover:bg-red-950/50"
          >
            <font-awesome-icon icon="fa-solid fa-times" />
          </button>
        </div>

        <div v-else>
          <NuxtLink
            v-if="authorizationUrl"
            :to="authorizationUrl"
            class="flex w-full justify-center rounded-md bg-emerald-600 px-7 py-2.5 text-center text-white/90 transition-colors duration-200 hover:bg-emerald-800"
          >
            Connect
          </NuxtLink>

          <span
            v-else
            class="flex w-full justify-center rounded-md bg-red-800 px-7 py-2.5 text-center text-white/90"
          >
            Not Available
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import { type ConnectedApp, SupportedApps } from "~/types";

import SpotifyIcon from "~/components/AppIcons/SpotifyIcon.vue";
import GoogleDriveIcon from "~/components/AppIcons/GoogleDriveIcon.vue";

const authStore = useAuthStore();
const { isSpotifyConnected, isGoogleConnected } = storeToRefs(authStore);

const props = defineProps<{
  app: ConnectedApp;
}>();

const loading = ref<boolean>(true);

const authorizationUrl = ref<string | null>(null);

const isConnected = computed<boolean>(() => {
  switch (props.app.type) {
    case SupportedApps.Spotify:
      return isSpotifyConnected.value;
    case SupportedApps.GoogleDrive:
      return isGoogleConnected.value;
    default:
      return false;
  }
});

const icon = computed<Component | null>(() => {
  switch (props.app.type) {
    case SupportedApps.Spotify:
      return SpotifyIcon;
    case SupportedApps.GoogleDrive:
      return GoogleDriveIcon;
    default:
      return null;
  }
});

async function fetchAuthorizationUrl(app: SupportedApps) {
  if (isConnected.value) {
    loading.value = false;
    return;
  }

  switch (app) {
    case SupportedApps.Spotify: {
      const { data } = await useFetch("/api/fetch-spotify-authorization-url");
      if (data.value?.success) {
        authorizationUrl.value = data.value?.url;
      }

      break;
    }

    case SupportedApps.GoogleDrive: {
      const { data } = await useFetch(
        "/api/google-drive-fetch-authorization-url",
      );
      if (data.value?.success) {
        authorizationUrl.value = data.value?.url;
      }
      break;
    }

    default:
      break;
  }

  loading.value = false;
}

function handleAppDisconnect() {
  switch (props.app.type) {
    case SupportedApps.Spotify:
      authStore.clearSpotifyAccessToken();
      break;
    case SupportedApps.GoogleDrive:
      authStore.clearGoogleDriveAccessToken();
      break;
    default:
      break;
  }

  fetchAuthorizationUrl(props.app.type);
}

onMounted(() => {
  fetchAuthorizationUrl(props.app.type);
});
</script>
