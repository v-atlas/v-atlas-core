<template>
  <div class="min-h-screen place-content-center">
    <div
      class="relative mx-auto flex w-[90%] max-w-[624px] flex-col items-center overflow-hidden rounded-[10px] bg-primary px-5 pb-10 pt-12 text-center lg:pb-24"
    >
      <div class="absolute -top-20 left-0 right-0 mx-auto w-[55%]">
        <img src="~/assets/images/frame.svg" alt="frame" />
      </div>

      <div class="mx-auto w-[90%] lg:w-[80%]">
        <input
          class="relative mb-5 w-full rounded-[11px] border border-[#343950] bg-[#1e2334] px-[14px] py-[11px] sm:block"
          type="text"
          placeholder="search a service"
        />

        <div class="main">
          <div
            class="dropzone-container relative py-10"
            :style="isDragging && 'border-color: green;'"
            @dragover="dragover"
            @dragleave="dragleave"
            @drop="drop"
          >
            <input
              type="file"
              multiple
              name="file"
              id="fileInput"
              class="hidden-input"
              @change="onChange"
              ref="file"
              accept=".pdf,.jpg,.jpeg,.png"
            />

            <label for="fileInput" class="file-label lg:text-xl mx-auto w-2/3">
              <div v-if="isDragging">Release to drop files here.</div>
              <div v-else class="flex flex-col items-center gap-4">
                <img
                  class="h-16 w-16"
                  src="~/assets/images/upload.svg"
                  alt="file upload"
                />
                <p>You can drag and drop images to upload</p>

                <button
                  class="relative mt-4 flex items-center gap-1 rounded-md bg-atlas-red pl-2 pr-3 lg:px-6 py-2"
                >
                  <img src="~/assets/images/plus.svg" alt="add icon" />
                  Upload File
                  <input
                    type="file"
                    multiple
                    name="file"
                    id="fileInput"
                    class="hidden-input !h-full !w-full"
                    @change="onChange"
                    ref="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </button>
              </div>
            </label>
            <div
              class="mx-auto mt-4 flex w-[90%] flex-col gap-3"
              v-if="files.length"
            >
              <div
                v-for="file in files"
                :key="file.name"
                class="relative flex rounded-[10px] bg-[#292E41] p-3"
              >
                <div class="flex items-center gap-1">
                  <img
                    class="h-10 w-10"
                    src="~/assets/images/folder.svg"
                    alt="folder"
                  />
                  <div>
                    <p class="truncate">
                      {{ file.name }}
                    </p>
                    <p class="text-start text-sm text-subdued">
                      {{ Math.round(file.size / 1000) + "kb" }}
                    </p>
                  </div>
                  
                </div>
                <div class="absolute right-2 top-0">
                  <button
                    class="ml-2"
                    type="button"
                    @click="remove(files.indexOf(file))"
                    title="Remove file"
                  >
                    <b>×</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDragging: false,
      files: [],
    };
  },
  methods: {
    onChange() {
      this.files.push(...this.$refs.file.files);
    },
    dragover(e) {
      e.preventDefault();
      this.isDragging = true;
    },
    dragleave() {
      this.isDragging = false;
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
      this.isDragging = false;
    },
    remove(i) {
      this.files.splice(i, 1);
    },
  },
};
</script>

<style scoped>
.dropzone-container {
  border-radius: 20px;
  background: #1e2334;
  border: 2px dashed #343950;
}

.hidden-input {
  opacity: 0;
  overflow: hidden;
  position: absolute;
}

.file-label {
  display: grid;
  place-content: center;
  cursor: pointer;
  min-height: 35vh;
}
</style>
