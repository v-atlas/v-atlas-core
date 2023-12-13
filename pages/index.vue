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
          <h2 class="mb-6 text-xl">Transaction History</h2>
          <hr class="mb-[18px] border border-gray-800" />
          <div class="space-y-4">
            <!-- single transaction history item -->
            <transaction-history-item />
          </div>
        </div>
        <div class="connected-app">connected</div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
