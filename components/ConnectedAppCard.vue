<template>
    <div class="p-6 pb-7 bg-secondary rounded-[10px]">
        <div class="flex justify-between">
          <component :is="appIcon"></component>
          <div class="block">
            <div v-if="!isConnected" class="bg-broom-950 h-[29px] pl-2 pr-3 pb-0.5 flex items-center justify-center gap-x-1 rounded-md border border-broom">
              <div class="bg-broom w-2 h-2 rounded-full"></div>
              <p class="text-[10px] text-broom leading-none">Not connected</p>
            </div>
            <div v-else class="bg-emerald-950 h-[29px] pl-2 pr-3 pb-[2px] flex items-center justify-center gap-x-1 rounded-md border-emerald border">
              <div class="bg-emerald w-2 h-2 rounded-full"></div>
              <p class="text-[10px] text-emerald leading-none">Connected</p>
            </div>
          </div>
        </div>
        <h3 class="mt-3 mb-2 text-white">{{ appName }}</h3>
        <p class="w-11/12 text-athens-gray-600">
          {{ description }}
        </p>
        <NuxtLink :to="link" class="bg-athens-gray-950 py-2.5 px-7 text-white/90 w-full flex justify-center text-center mt-7 rounded-md">
          Manage
        </NuxtLink>
    </div>
</template>


<script setup lang="ts">
defineProps<{
  appName: string;
  description: string;
  isConnected: boolean;
  appIcon: Component;
  link: string;
}>()

</script>