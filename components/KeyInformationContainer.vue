<template>
  <div class="flex flex-col gap-10">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
      <div v-for="(item, index) in keyInformationData" :key="index">
        <div
          class="relative flex gap-[17px] overflow-hidden rounded-[10px] bg-primary px-[21px] py-[26px]"
        >
          <div
            class="absolute -left-20 -top-20 h-32 w-32 rounded-[64px] blur-[84px]"
            :style="{ backgroundColor: item.shadow }"
          ></div>
          <div class="icon-container">
            <div class="icon"></div>
          </div>
          <div>
            <h3 class="relative z-10 text-sm text-subdued">{{ item.title }}</h3>
            <p class="relative z-10 text-2xl text-white">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { keyInformationData } from "~/data/KeyInformation";

export default {
  data() {
    return {
      keyInformationData,
    };
  }
};
</script>

<style scoped>
.icon-container {
  width: 54px;
  height: 54px;

}
.icon {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* You can adjust the background image path based on your project structure */
.icon:nth-child(1) {
  background-image: url('~/assets/images/spotify.svg');
}

</style>
