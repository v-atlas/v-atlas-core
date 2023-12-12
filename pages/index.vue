<template>
  <div class="px-10 py-20 md:px-20">
    <nuxt-link
      to="/apps/spotify/manage"
      class="rounded-md bg-emerald-800 p-5 font-bold no-underline transition-colors duration-200 hover:bg-emerald-600"
      >Manage Spotify Data</nuxt-link
    >
  </div>
</template>

<script lang="ts" setup>
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

<style scoped></style>
