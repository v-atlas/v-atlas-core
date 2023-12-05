<template>
  <div class="v-atlas-app">
    <AppHeader />
    <div class="page">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "~/assets/scss/default.scss";
</style>

<style lang="scss" scoped>
div.v-atlas-app {
  display: grid;
  grid-template-rows: max-content auto max-content;
  grid-template-columns: auto;
  height: 100%;
  div.page {
    height: 100%;
    min-height: calc(100vh - 100px);

    padding: 0 20px;

    @media screen and (min-width: 768px) {
      padding: 0 50px;
    }
  }
}
</style>
