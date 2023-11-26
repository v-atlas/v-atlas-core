<template>
  <NuxtLayout>
    <div class="error-page">
      <div class="prose">
        <h3>Something Happened!</h3>
        <p v-if="isPageNotFound">
          The page you are looking for does not exist.
        </p>

        <p v-else>
          {{ error?.message }}
        </p>

        <button @click="clearPageError" class="action">Home</button>
      </div>
    </div>
    <CookieBanner />
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

<style scoped lang="scss">
div.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 60vh;

  div.prose {
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    p {
      padding: 0;
      font-size: 0.9rem;
    }
  }
}
</style>
