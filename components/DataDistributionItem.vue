<template>
  <div class="flex items-center justify-between gap-10">
    <div class="flex items-center gap-[6px] rounded">
      <div class="h-6 w-6 border border-[#282D44] p-1">
        <img class="h-full w-full" src="~/assets/images/meta.svg" alt="meta" />
      </div>
      <h4 class="text-sm">Meta.com</h4>
    </div>
    <div class="progress-bar-wrapper">
      <div
        class="progress-bar-counter"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
    <p class="text-xs">{{ percentage }}%</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const percentage = ref(50);
</script>

<style scoped>
.progress-bar-wrapper {
  width: 100%;
  height: 16px;
  background-color: #282d44;
  border-radius: 4px;
  margin: 0 auto;
}

.progress-bar-counter {
  background: #fb3667;
  height: 100%;
  border-radius: 4px;
  transition: width 0.5s ease; /* Smoothly transition width changes over 0.5 seconds */
}
</style>
