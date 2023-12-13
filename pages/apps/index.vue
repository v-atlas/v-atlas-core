<template>
  <h1 class="mb-10 text-xl">Connected Apps</h1>
  <div
    class="grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
  >
    <connected-app-card v-for="app in apps" :app="app" />
  </div>
</template>

<script setup lang="ts">
import { type ConnectedApp, SupportedApps } from "~/types";

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

const apps = computed<ConnectedApp[]>(() => {
  const spotifyApp: ConnectedApp = {
    type: SupportedApps.Spotify,
    description: "Spotify is a widely popular digital music streaming service.",
    link: "/apps/spotify/manage",
  };

  const googleDriveApp: ConnectedApp = {
    type: SupportedApps.GoogleDrive,
    description:
      "Google Drive can provide encrypted and secure access to your files.",
    link: "/apps/google-drive/manage",
  };

  return [spotifyApp, googleDriveApp];
});
</script>
