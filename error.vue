<template>
  <NuxtLayout>
    <div class="flex min-h-screen flex-col justify-center align-middle">
      <div class="mx-auto flex flex-col text-center">
        <h3 class="my-2 text-2xl font-bold">Something Happened!</h3>
        <p v-if="isPageNotFound" class="text-sm">
          The page you are looking for does not exist.
        </p>

        <p v-else class="text-sm">
          {{ error?.message }}
        </p>

        <button
          @click="clearPageError"
          class="mx-auto my-5 w-40 rounded-md bg-broom-500 p-2 text-black transition-colors duration-200 hover:bg-broom-600"
        >
          Home

          <font-awesome-icon icon="fa-solid fa-home" />
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { computed } from "#imports";

useHead({
  title: "Error",
});

const error = useError();

const isPageNotFound = computed<boolean>(() => {
  if (error.value && "statusCode" in error.value) {
    return error.value.statusCode === 404;
  }
  return false;
});

async function clearPageError() {
  await clearError({
    redirect: "/",
  });
}
</script>

<style scoped></style>
