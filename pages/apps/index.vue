<template>
    <h1 class="text-xl mb-10">Connected Apps</h1>
    <div class="grid gap-y-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6">
        <connected-app-card v-for="app in apps" :app-icon="app.appIcon" :app-name="app.appName" :description="app.description" :is-connected="app.isConnected" :link="app.link"  />
    </div>
</template>


<script setup lang="ts">
import SpotifyIcon from '~/components/AppIcons/SpotifyIcon.vue';
import GoogleDriveIcon from '~/components/AppIcons/GoogleDriveIcon.vue';
import { useAuthStore } from '~/stores/auth';
import type { ConnectedApp } from '~/types';

useHead({
  title: "Connected Apps | V-Atlas",
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
    "Connected Apps | V-Atlas: Revolutionizing Digital Identity and Data Management",
  description:
    "Discover V-Atlas, a visionary platform using Web5 technology to empower users with secure, flexible virtual storage and identity management. Control your digital presence like never before.",
});

const authStore = useAuthStore();
const { isSpotifyConnected } = storeToRefs(authStore);

const apps = shallowRef<ConnectedApp[]>([
    {
        appIcon: SpotifyIcon,
        appName: "Spotify",
        description: "Spotify is a widely popular digital music streaming service.",
        isConnected: isSpotifyConnected.value,
        link: '/apps/spotify/manage'
    },
    {
        appIcon: GoogleDriveIcon,
        appName: "Google Drive",
        description: "Google Drive can provide encrypted and secure access to your files.",
        isConnected: false,
        link: '/apps/google-drive/manage'
    },
])
</script>