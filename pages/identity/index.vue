<template>
  <div class="mb-10">
    <h2 class="mb-[25px] text-xl">Identity Management</h2>
    <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      <nuxt-link
        to="/identity/did"
        class="relative flex flex-col items-center overflow-hidden rounded-[10px] border-[1.4px] border-transparent bg-primary px-5 pb-7 pt-12 text-center transition duration-300 hover:scale-105 hover:border-[#DCC23C]"
      >
        <div class="absolute -top-20 left-0 w-full">
          <img src="~/assets/images/frame.svg" alt="frame" />
        </div>
        <div
          class="absolute left-[84px] top-0 h-[196px] w-[196px] rounded-[98px] bg-[#dcc23c80] blur-[114px]"
        ></div>
        <img
          src="~/assets/images/info.svg"
          alt="info icon"
          class="relative mb-[36px]"
        />
        <p class="relative mb-[65px] text-2xl">My DID</p>
        <div class="w-fit rounded-[174px] bg-[#1e2235] p-[5.11px]">
          <img src="~/assets/images/arrowright.svg" alt="right arrow" />
        </div>
        <div
          class="absolute -bottom-0 left-0 right-0 mx-auto h-[4px] w-[50%] bg-gradient-to-r from-transparent via-[#cfdc3c] to-transparent blur-sm"
        ></div>
      </nuxt-link>
      <nuxt-link
        to="/identity/vc"
        class="relative flex flex-col items-center overflow-hidden rounded-[10px] border-[1.4px] border-transparent bg-primary px-5 pb-7 pt-12 text-center transition duration-300 hover:scale-105 hover:border-[#1DD35E]"
      >
        <div class="absolute -top-20 left-0 w-full">
          <img src="~/assets/images/frame.svg" alt="frame" />
        </div>
        <div
          class="absolute left-[84px] top-0 h-[196px] w-[196px] rounded-[98px] bg-[#1DD35E99] blur-[114px]"
        ></div>
        <img
          src="~/assets/images/badge.svg"
          alt="info icon"
          class="relative mb-[36px]"
        />
        <p class="relative mb-[65px] text-2xl">My Verifiable Credentials</p>
        <div class="w-fit rounded-[174px] bg-[#1e2235] p-[5.11px]">
          <img src="~/assets/images/arrowright.svg" alt="right arrow" />
        </div>
        <div
          class="absolute -bottom-0 left-0 right-0 mx-auto h-[4px] w-[50%] bg-gradient-to-r from-transparent via-[#3CDCB3] to-transparent blur-sm"
        ></div>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
