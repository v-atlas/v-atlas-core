<template>
  <div class="rounded-md bg-slate-500 p-2 text-sm">
    <audio controls v-if="startPreview">
      <source :src="mediaUrl" :type="sourceType" />
    </audio>

    <template v-else>
      <button @click="togglePreview" class="w-full">
        Listen to preview
        <font-awesome-icon icon="fa-solid fa-play" class="ml-2" />
      </button>
    </template>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    mediaUrl: string;
    sourceType?: string;
  }>(),
  {
    sourceType: "audio/mpeg",
  },
);

const startPreview = ref<boolean>(false);

function togglePreview() {
  startPreview.value = !startPreview.value;
}
</script>

<style></style>
