<template>
  <div class="mb-10">
    <div class="mb-6 mt-8 flex gap-[10px]">
      <div class="rounded-[100px] bg-[#1b1f31] p-[7px]">
        <img src="~/assets/images/previous.svg" alt="previous icon" />
      </div>
      <div class="rounded-[100px] bg-[#1b1f31] p-[7px]">
        <img src="~/assets/images/next.svg" alt="next icon" />
      </div>
    </div>
    <div
      class="relative mx-auto flex w-[90%] max-w-[624px] flex-col items-center overflow-hidden rounded-[10px] border-[1.4px] border-[#DCC23C] bg-primary px-5 pb-10 pt-12 text-center lg:pb-[132px]"
    >
      <div class="absolute -top-20 left-0 right-0 mx-auto w-[55%]">
        <img src="~/assets/images/frame.svg" alt="frame" />
      </div>
      <div
        class="absolute left-[84px] top-0 h-[196px] w-[196px] rounded-[98px] bg-[#dcc23c80] blur-[114px]"
      ></div>
      <img
        src="~/assets/images/info.svg"
        alt="info icon"
        class="relative mb-[49px]"
      />
      <p class="relative text-xs leading-8 text-subdued">DID</p>
      <div
        class="mb-[49px] flex gap-[17px] rounded-[100px] bg-[#1e2235] px-5 py-[10px]"
      >
        <p class="max-w-sm truncate">{{ did }}</p>
        <button @click="handleCopyDID">
          <img src="~/assets/images/copy-white.svg" alt="copy icon" />
        </button>
      </div>
      <canvas ref="qrCanvas" class="scale-75"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import qrcode from "qrcode";
import { useClipboard } from "@vueuse/core";
const { copy } = useClipboard();

const { $myDID: did } = useNuxtApp();

const qrCanvas = ref<HTMLCanvasElement | null>(null);

function handleCopyDID() {
  copy(did);
}

function generateQRCode() {
  if (!qrCanvas.value) {
    return;
  }

  if (!did) {
    return;
  }

  qrcode.toCanvas(qrCanvas.value, did, {
    margin: 1,
  });
}

watch(() => did, generateQRCode);

onMounted(() => {
  generateQRCode();
});
</script>
