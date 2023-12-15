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
      to="/identity/vc"
      class="relative mx-auto flex w-[90%] max-w-[624px] flex-col items-center overflow-hidden rounded-[10px] border-[1.4px] border-[#1DD35E] bg-primary px-5 pb-10 pt-12 text-center lg:pb-[149px]"
    >
      <div class="absolute -top-20 left-0 right-0 mx-auto w-[55%]">
        <img src="~/assets/images/frame.svg" alt="frame" />
      </div>
      <div
        class="absolute left-[84px] top-0 h-[196px] w-[196px] rounded-[98px] bg-[#1DD35E99] blur-[114px]"
      ></div>
      <img
        src="~/assets/images/badge.svg"
        alt="badge icon"
        class="relative mb-28"
      />
      <div class="flex w-[80%] flex-wrap justify-center gap-[23px]">
        <div class="rounded-[10px] bg-[#1f2336] px-[60px] py-5">
          <img src="~/assets/images/kyc.svg" alt="kyc icon" class="mb-[18px]" />
          KYC VC
        </div>
        <div class="rounded-[10px] bg-[#1f2336] px-[60px] py-5">
          <img
            src="~/assets/images/mail.svg"
            alt="mail icon"
            class="mb-[18px]"
          />
          EMAIL VC
        </div>
      </div>
    </div>
  </div>
</template>
