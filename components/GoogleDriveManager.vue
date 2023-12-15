<template>
    <div class="flex flex-col gap-10">
        <div class="flex max-w-fit flex-col gap-2 md:flex-row">
            <button
                class="text-light flex items-center gap-2 rounded-md bg-atlas-red px-5 py-2 font-bold transition-colors duration-200 hover:bg-opacity-70"
                :disabled="filesFetchStatus === 'pending'" @click="handleDownloadPlaylist">
                <img src="~/assets/images/sync.svg" alt="sync icon" />
                Sync Drive Files

                <font-awesome-icon v-if="filesFetchStatus === 'pending'" icon="fa-solid fa-circle-notch" spin />
            </button>
        </div>

        <div v-if="filesAvailable">
            <!-- Google file component -->
            {{ JSON.stringify(filesData) }}
        </div>
    </div>
</template>


<script lang="ts" setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

const { googleDriveAccessToken } = storeToRefs(authStore);

const {
    execute: fetchFiles,
    data: filesData,
    status: filesFetchStatus,
} = useLazyFetch("/api/google-drive-fetch-files", {
    server: false,
    immediate: false,
    method: "POST",
    body: JSON.stringify({ accessToken: googleDriveAccessToken.value }),
});

const handleDownloadPlaylist = () => {
    console.log(googleDriveAccessToken.value)
    fetchFiles({})
};

const filesAvailable = computed<boolean>(() => !!filesData.value?.success);

// const { status: addAllPlaylistStatus, execute: addAllPlaylistsToAtlas } =
//     useAsyncData(
//         async () => {
//             if (!filesData.value?.files?.length) {
//                 return;
//             }

//             const playlists = filesData.value.files;

//             await spotifyStore.addAllPlaylistsToAtlas(playlists);
//         },
//         {
//             immediate: false,
//         },
//     );

// const handleAddAllPlaylistToAtlas = () => addAllPlaylistsToAtlas();

// const isAddingAllToAtlas = computed<boolean>(
//     () => addAllPlaylistStatus.value === "pending",
// );
</script>