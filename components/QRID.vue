<template>
  <ClientOnly>
    <div class="qr-did">
      <div :class="qrModalClass">
        <div class="content">
          <div class="header">
            <button @click="closeQrModal" class="close secondary action">
              <font-awesome-icon icon="fa-times" />
            </button>
          </div>
          <div class="body">
            <canvas ref="qrCanvas"></canvas>
          </div>
        </div>
      </div>

      <div class="actions">
        <span class="did-value">
          {{ summarizeDID(did) }}
        </span>
        <button class="action primary" @click="copyDid">
          <font-awesome-icon icon="fa-solid fa-copy" />
        </button>
        <button class="action secondary" @click="generateQRCode">
          <font-awesome-icon icon="fa-solid fa-qrcode" />
        </button>
      </div>
    </div>
  </ClientOnly>
</template>

<script lang="ts" setup>
import qrcode from "qrcode";
import { useClipboard } from "@vueuse/core";

const { copy } = useClipboard();

const props = withDefaults(
  defineProps<{
    did: string;
  }>(),
  {
    did: "",
  }
);

const qrCanvas = ref<HTMLCanvasElement | null>(null);
const isQrModalOpen = ref<boolean>(false);

const qrModalClass = computed<{
  [key: string]: boolean;
}>(() => ({
  "qr-modal": true,
  visible: isQrModalOpen.value,
}));

function summarizeDID(did: string) {
  return did.slice(8);
}

function closeQrModal() {
  isQrModalOpen.value = false;
}

function generateQRCode() {
  if (qrCanvas.value) {
    isQrModalOpen.value = true;
    qrcode.toCanvas(qrCanvas.value, props.did, {
      margin: 1,
    });
  }
}

function copyDid() {
  copy(props.did);
}

watch(() => props.did.length, generateQRCode);
</script>

<style lang="scss" scoped>
div.qr-did {
  background-color: rgba($color: $primary-yellow, $alpha: 0.3);
  border: 3px solid $primary-dark;
  border-radius: 6px;
  max-width: max-content;

  div.qr-modal {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    height: 100%;
    width: 100%;

    background-color: rgba($color: $primary-dark, $alpha: 0.4);

    display: none;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.visible {
      display: flex;
    }

    div.content {
      display: flex;
      flex-direction: column;
      gap: 10px;

      div.header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        height: 30px;
      }

      div.body {
        canvas {
          height: 300px;
          width: 300px;
        }
      }
    }
  }

  div.actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    background-color: rgba($color: $primary-dark, $alpha: 0.2);
    padding: 10px;

    span.did-value {
      font-family: "Courier New", Courier, monospace;
      font-weight: 600;
      display: block;
      width: calc(100% - 100px);
      max-width: 300px;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      margin-right: auto;
    }
  }
}
</style>
