<template>
  <div class="rounded-[10px] bg-primary p-6 pb-7">
    <div class="flex flex-row justify-between">
      <div v-if="icon">
        <component :is="icon"></component>
      </div>
      <div class="block">
        <div v-if="isConnected" class="flex flex-row gap-2">
          <div
            class="flex h-[29px] items-center justify-center gap-x-1 rounded-md border border-[#74DFA0] bg-[#1F2C30]  pl-2 pr-3"
          >
            <div class="h-2 w-2 rounded-full bg-[#74DFA0]"></div>
            <p class="text-[10px] leading-none text-[#74DFA0]">Connected</p>
          </div>
        </div>

        <div
          v-else
          class="flex h-[29px] items-center justify-center gap-x-1 rounded-md border border-[#DFD474] bg-[#2E2C19] pl-2 pr-3"
        >
          <div class="h-2 w-2 rounded-full bg-[#DFD474]"></div>
          <p class="text-[10px] leading-none text-[#DFD474]">Not connected</p>
        </div>
      </div>
    </div>
    <div class="mt-3 flex h-fit flex-col gap-2">
      <h3 class="text-white">{{ app.type }}</h3>
      <p class="mb-4 w-11/12 text-sm text-athens-gray-600 line-clamp-2">
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
            class="mt-auto flex w-10/12 justify-center rounded-md border border-gray-800 bg-[linear-gradient(180deg,rgb(27.34,31.82,49.71)0%,rgba(27.34,31.82,49.71,0.59)100%)] px-7 py-[10px] text-[#D1D1D5]"
          >
            Manage
          </NuxtLink>

          <button
            @click="handleAppDisconnect"
            class="mt-auto flex justify-center items-center h-11 w-2/12 rounded-md bg-[#291A2B] text-white/90 transition-colors duration-200 hover:bg-red-950/50"
          >
            <img class="w-6 h-6" src="~/assets/images/disconnect.svg" alt="">
          </button>
        </div>

        <div v-else>
          <NuxtLink
            v-if="authorizationUrl"
            :to="authorizationUrl"
            class="flex w-full justify-center rounded-md bg-emerald-500 px-7 py-2.5 text-center text-white/90 transition-colors duration-200 hover:bg-emerald-800"
          >
            Connect
          </NuxtLink>

          <span
            v-else
            class="flex w-full justify-center rounded-md bg-[#291A2B] px-7 py-2.5 text-center text-white/90"
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
      const { data } = await useFetch("/api/fetch-spotify-authorization-url", {
        retry: 3,
        retryDelay: 1000,
      });
      if (data.value?.success) {
        authorizationUrl.value = data.value?.url;
      }

      break;
    }

    case SupportedApps.GoogleDrive: {
      const { data } = await useFetch(
        "/api/google-drive-fetch-authorization-url",
        {
          retry: 3,
          retryDelay: 1000,
        },
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
