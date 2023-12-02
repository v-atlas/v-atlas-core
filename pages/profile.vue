<template>
  <div class="profile">
    <Qrid :did="myDid" />
  </div>
</template>

<script lang="ts" setup>
const { $myDID: myDid } = useNuxtApp();
</script>

<style></style>
