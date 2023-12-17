<template>
  <div class="content py-14">
    <div class="key-info mb-6">
      <h2 class="mb-3 text-xl">Key Information</h2>
      <key-information-container />
    </div>
    <div>
      <h2 class="mb-3 text-xl">Connected Apps</h2>
      <div class="details-container">
        <div class="graph rounded-[10px] bg-primary pb-[14px] pt-6">
          <h2 class="mb-6 ml-6 text-xl">Data Distribution</h2>
          <div
            class="mx-[10px] space-y-6 rounded-md border border-[#333953] p-[18px]"
          >
            <!-- single data distribution item -->
            <data-distribution-item />
          </div>
        </div>
        <div class="history rounded-[10px] bg-primary px-6 pb-20 pt-6">
          <h2 class="mb-6 text-xl">Activity</h2>
          <hr class="mb-[18px] border border-gray-800" />
          <div class="space-y-4">
            <!-- single transaction history item -->
            <transaction-history-item />
          </div>
        </div>
        <div class="connected-app">
          <div class="grid gap-x-6 gap-y-8 md:grid-cols-2">
            <connected-app-card v-for="app in apps" :app="app" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type ConnectedApp, SupportedApps } from "~/types";
useHead({
  title: "V-Atlas",
  meta: [
    {
      key: "keywords",
      content:
        "V-Atlas, digital identity, Web5, virtual storage, data management, user privacy, decentralized platforms, identity security.",
    },
  ],
});

useSeoMeta({
  title: "V-Atlas: Revolutionizing Digital Identity and Data Management",
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

<style scoped>
.details-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 17px;
  grid-auto-flow: row;
  grid-template-areas:
    "connected-app connected-app history"
    "graph graph history";
}

.graph {
  grid-area: graph;
}

.history {
  grid-area: history;
}

.connected-app {
  grid-area: connected-app;
}

@media (max-width: 1280px) {
  .details-container {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      "connected-app connected-app connected-app"
      "graph graph graph"
      "history history history";
  }
}
</style>
