<template>
  <div class="mb-10">
    <div class="mt-8 mb-6 flex gap-[10px]">
      <div class="p-[7px] rounded-[100px] bg-[#1b1f31]">  <img
            src="~/assets/images/previous.svg"
            alt="previous icon"
          /></div>
          <div class="p-[7px] rounded-[100px] bg-[#1b1f31]">
            <img
            src="~/assets/images/next.svg"
            alt="next icon"
          />
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
      <p class="relative text-xs leading-8 text-subdued">DID NUMBER</p>
      <div
        class="mb-[49px] flex gap-[17px] rounded-[100px] bg-[#1e2235] px-5 py-[10px]"
      >
        <p>485869604005</p>
        <img src="~/assets/images/copy-white.svg" alt="copy icon" />
      </div>
      <img src="~/assets/images/qr-code.svg" alt="qrcode icon" />
    </div>
  </div>
</template>
