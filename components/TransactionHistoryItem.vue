<template>
  <div
    class="hover:bg-light-gray flex cursor-pointer items-center gap-[10px] px-2 py-[9px]"
  >
    <div>
      <img
        class="h-[36px] w-[36px]"
        src="~/assets/images/spotify.svg"
        alt="spotify"
      />
    </div>
    <div>
      <h3>you sent this playlist to Spotify</h3>
      <div class="flex gap-[10px]">
        <div class="text-xs text-subdued">
          <span></span>
          <span>12/14/23</span>
        </div>
        <div class="text-xs text-subdued">
          <span></span>
          <span>2:00pm</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
