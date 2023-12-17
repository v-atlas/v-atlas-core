<template>
    <div>
        <span class="placeholder" v-if="pending">
            Please wait
            <font-awesome-icon icon="fa-solid fa-circle-notch" spin />
        </span>

        <div class="relative flex flex-row gap-2" v-else>
            <template v-if="data?.success">
                <button
                    class="relative flex items-center gap-[17px] overflow-hidden rounded-[10px] bg-primary px-[21px] py-3 transition duration-300 ease-in-out hover:bg-[#ff5c3f4c] disabled:hover:bg-primary"
                    @click="handleConnectToGoogleDrive" :class="{ 'pr-12': isGoogleConnected }"
                    :disabled="isGoogleConnected">
                    <div class="absolute -left-20 -top-20 h-32 w-32 rounded-[64px] bg-[#FF5B3F99] blur-[84px]"></div>
                    <GoogleDriveIcon></GoogleDriveIcon>
                    {{ isGoogleConnected ? "Connected" : "Connect" }}
                    to Google Drive
                </button>

                <button class="absolute right-3 top-[9px]" v-if="isGoogleConnected"
                    @click="handleDisconnectFromGoogleDrive">
                    <font-awesome-icon icon="fa-solid fa-times-circle"
                        class="text-blush-400 transition-colors duration-300 hover:text-blush-300" />
                </button>
            </template>

            <span class="flex gap-[17px] rounded-md bg-red-500 py-3 px-[21px] items-center " v-else>
                <p>Google Drive is unavailable at this time</p>
                <font-awesome-icon class="h-6 w-6" icon="fa-brands fa-spotify" />
            </span>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import GoogleDriveIcon from "./AppIcons/GoogleDriveIcon.vue";
const { pending, data } = useFetch("/api/google-drive-fetch-authorization-url");

const authStore = useAuthStore();
const { isGoogleConnected } = storeToRefs(authStore);

function handleConnectToGoogleDrive() {
    if (!data.value || !data.value.success) return;

    navigateTo(data.value.url, { external: true });
}

function handleDisconnectFromGoogleDrive() {
    authStore.clearGoogleDriveAccessToken();
    navigateTo({
        path: "/apps",
    });
}
</script>
  
<style scoped></style>
  