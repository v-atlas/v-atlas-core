<template>
  <div>
    <nav class="bg-primary fixed top-0 z-50 w-full">
      <div class="px-3 py-5 sm:px-8">
        <div class="flex items-center justify-between">
          <div
            class="flex items-center justify-start rtl:justify-end sm:basis-[60%]"
          >
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 sm:hidden"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a href="/" class="ms-2 flex md:me-24">
              <img
                src="~/assets/images/logo.svg"
                class="me-3 h-8"
                alt="VAtlas Logo"
              />
              <span
                class="self-center whitespace-nowrap text-xl font-semibold text-white sm:text-2xl"
                >VAtlas</span
              >
            </a>
            <input
              class="ml-16 hidden h-10 w-full rounded-[11px] bg-[#343950] px-[14px] py-[11px] sm:block"
              type="text"
              placeholder="Search..."
            />
          </div>

          <div class="flex items-center">
            <div class="ms-3 flex items-center">
              <div>
                <button
                  type="button"
                  class="flex items-start gap-[14px] rounded-full bg-gray-800 text-sm"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                  <div class="" role="none">
                    <p class="text-white" role="none">Clinton Dike</p>
                    <p class="text-xs font-medium text-gray-500" role="none">
                      Owner
                    </p>
                  </div>
                  <img
                    class="h-5 w-5 rounded-full"
                    src="~/assets/images/dropdown.svg"
                    alt="user profile"
                  />
                </button>
              </div>
              <div
                class="bg-primary border-grey-800 z-50 my-4 hidden list-none divide-y divide-gray-600 rounded border text-base shadow"
                id="dropdown-user"
              >
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-white" role="none">Clinton Dike</p>
                  <p
                    class="truncate text-sm font-medium text-gray-300"
                    role="none"
                  >
                    clinton@vatlas.com
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                      role="menuitem"
                      >Dashboard</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                      role="menuitem"
                      >Settings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                      role="menuitem"
                      >Earnings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                      role="menuitem"
                      >Sign out</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <aside
      id="logo-sidebar"
      class="bg-primary fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full pt-24 transition-transform sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="bg-primary h-full overflow-y-auto pb-4">
        <p class="px-11 py-3 text-xs text-gray-500">MAIN MENU</p>
        <ul class="mb-24 space-y-4 font-medium">
          <li>
            <a
              href="/"
              class="sidenav group flex items-center rounded-lg border-l-4 border-transparent px-10 py-3 text-white hover:border-[#fb3667] hover:bg-gradient-to-r hover:from-[#fb366756]"
              :class="{
                'border-[#fb3667] bg-gradient-to-r from-[#fb366756]':
                  currentPath.value === '/',
              }"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-white transition duration-75 group-hover:text-[#fb3667]"
                :class="{ 'text-[#fb3667]': currentPath.value === '/' }"
              >
                <g clip-path="url(#clip0_2233_16471)">
                  <path
                    d="M0.24082 0.238399C0.0469038 0.43079 -0.05 0.670048 -0.05 0.95276V8.57642C-0.05 8.859 0.0460991 9.09825 0.238528 9.29074C0.431024 9.48332 0.671284 9.57939 0.955776 9.57939H6.71635C7.00085 9.57939 7.24176 9.48337 7.43565 9.29099C7.62955 9.0986 7.72644 8.85934 7.72644 8.57663V0.952971C7.72644 0.670385 7.63035 0.431138 7.43794 0.238651C7.24544 0.0460623 7.00517 -0.05 6.72066 -0.05H0.960117C0.675617 -0.05 0.434711 0.0460139 0.24082 0.238399ZM0.24082 0.238399L0.276035 0.273893L0.24082 0.238399ZM10.2736 0.96205V4.86147C10.2736 5.14992 10.3694 5.39236 10.5621 5.58501C10.7546 5.77751 10.9948 5.87352 11.2793 5.87352H17.0399C17.3244 5.87352 17.5653 5.77752 17.7592 5.58515C17.9533 5.39252 18.05 5.15004 18.05 4.86147V0.96205C18.05 0.673615 17.9541 0.431189 17.7615 0.23854C17.569 0.0460243 17.3287 -0.05 17.0442 -0.05H11.2836C10.9991 -0.05 10.7582 0.0460156 10.5644 0.2384C10.3702 0.431026 10.2736 0.673495 10.2736 0.96205ZM10.2736 9.42337V17.047C10.2736 17.3296 10.3696 17.5689 10.5621 17.7613C10.7546 17.9539 10.9948 18.05 11.2793 18.05H17.0399C17.3244 18.05 17.5653 17.954 17.7592 17.7616C17.9531 17.5692 18.05 17.33 18.05 17.0472V9.42358C18.05 9.141 17.9539 8.90175 17.7615 8.70926C17.569 8.51667 17.3287 8.42061 17.0442 8.42061H11.2836C10.9992 8.42061 10.7582 8.51663 10.5644 8.70901C10.3705 8.9014 10.2736 9.14066 10.2736 9.42337ZM-0.05 13.1385V17.0379C-0.05 17.3264 0.0458667 17.5688 0.238535 17.7615C0.431031 17.954 0.67129 18.05 0.955776 18.05H6.71635C7.00085 18.05 7.24176 17.954 7.43565 17.7616C7.62978 17.569 7.72644 17.3265 7.72644 17.0379V13.1385C7.72644 12.8501 7.63058 12.6076 7.43793 12.415C7.24543 12.2225 7.00516 12.1265 6.72066 12.1265H0.960117C0.675619 12.1265 0.434712 12.2225 0.24082 12.4149C0.0466674 12.6075 -0.05 12.85 -0.05 13.1385ZM6.03825 1.63821V7.89117H1.63821V1.63821H6.03825ZM16.3618 10.1088V16.3618H11.9617V10.1088H16.3618ZM16.3618 1.63821V4.18531H11.9617V1.63821H16.3618ZM6.03825 13.8147V16.3618H1.63821V13.8147H6.03825Z"
                    stroke="#D0D1D3"
                    stroke-width="0.1"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2233_16471">
                    <rect width="18" height="18" />
                  </clipPath>
                </defs>
              </svg>

              <span
                class="ms-3 text-sm font-light group-hover:font-medium group-hover:text-[#fb3667]"
                :class="{ 'text-[#fb3667]': currentPath.value === '/' }"
                >Dashboard</span
              >
            </a>
          </li>

          <li>
            <a
              href="/data"
              class="sidenav group flex items-center rounded-lg border-l-4 border-transparent px-10 py-3 text-white hover:border-[#fb3667] hover:bg-gradient-to-r hover:from-[#fb366756]"
              :class="{
                'border-[#fb3667] bg-gradient-to-r from-[#fb366756]':
                  currentPath.value === '/data',
              }"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                class="h-5 w-5 text-white transition duration-75 group-hover:text-[#fb3667]"
                :class="{ 'text-[#fb3667]': currentPath.value === '/data' }"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2233_16469)">
                  <path
                    d="M17.6198 7.26298C17.2545 6.77248 16.6943 6.49048 16.0823 6.49048H15.75V5.00023C15.75 2.93248 14.0677 1.25023 12 1.25023H8.208C8.0925 1.25023 7.9755 1.22248 7.87275 1.17148L5.5065 -0.0120231C5.196 -0.167273 4.848 -0.249023 4.5 -0.249023H3C1.3455 -0.249773 0 1.09573 0 2.75023V12.5002C0 14.568 1.68225 16.2502 3.75 16.2502H13.1685C14.838 16.2502 16.281 15.1762 16.77 13.545L17.919 8.95798C18.0945 8.37148 17.985 7.75423 17.6198 7.26298ZM1.5 12.5002V2.75023C1.5 1.92298 2.17275 1.25023 3 1.25023H4.5C4.6155 1.25023 4.7325 1.27798 4.83525 1.32898L7.2015 2.51248C7.512 2.66773 7.86 2.74948 8.208 2.74948H12C13.2405 2.74948 14.25 3.75898 14.25 4.99948V6.48973H6.46125C5.18625 6.48973 4.04775 7.29898 3.6195 8.52973L1.977 13.8832C1.6785 13.5015 1.5 13.0215 1.5 12.5002ZM16.473 8.56048L15.324 13.1467C15.036 14.106 14.1698 14.7502 13.1685 14.7502H3.75C3.594 14.7502 3.44175 14.7345 3.29475 14.7037L5.04525 8.99698C5.2545 8.39473 5.8245 7.99048 6.462 7.99048H16.083C16.2645 7.99048 16.3703 8.09548 16.4167 8.15848C16.4632 8.22148 16.5338 8.35273 16.473 8.56048Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2233_16469">
                    <rect width="18" height="18" />
                  </clipPath>
                </defs>
              </svg>

              <span
                class="ms-3 text-sm font-light group-hover:font-medium group-hover:text-[#fb3667]"
                :class="{ 'text-[#fb3667]': currentPath.value === '/data' }"
                >Data</span
              >
            </a>
          </li>
          <li>
            <a
              href="/connectedapps"
              class="sidenav group flex items-center rounded-lg border-l-4 border-transparent px-10 py-3 text-white hover:border-[#fb3667] hover:bg-gradient-to-r hover:from-[#fb366756]"
              :class="{
                'border-[#fb3667] bg-gradient-to-r from-[#fb366756]':
                  currentPath.value === '/connectedapps',
              }"
            >
              <svg
                class="h-5 w-5 text-white transition duration-75 group-hover:text-[#fb3667]"
                :class="{
                  'text-[#fb3667]': currentPath.value === '/connectedapps',
                }"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.75 13.5H8.75C8.336 13.5 8 13.1648 8 12.75C8 12.3352 8.336 12 8.75 12H11.75C12.164 12 12.5 12.3352 12.5 12.75C12.5 13.1648 12.164 13.5 11.75 13.5ZM15.5 14.25V5.25C15.5 3.18225 13.8177 1.5 11.75 1.5H11.6217C11.312 0.627 10.478 0 9.5 0H8C7.022 0 6.188 0.627 5.87825 1.5H5.75C3.68225 1.5 2 3.18225 2 5.25V14.25C2 16.3177 3.68225 18 5.75 18H11.75C13.8177 18 15.5 16.3177 15.5 14.25ZM6.5 3C6.914 3 7.25 2.66475 7.25 2.25C7.25 1.83525 7.58675 1.5 8 1.5H9.5C9.91325 1.5 10.25 1.836 10.25 2.25C10.25 2.664 10.586 3 11 3H11.75C12.9905 3 14 4.0095 14 5.25V14.25C14 15.4905 12.9905 16.5 11.75 16.5H5.75C4.5095 16.5 3.5 15.4905 3.5 14.25V5.25C3.5 4.0095 4.5095 3 5.75 3H6.5ZM5.75 12C5.336 12 5 12.336 5 12.75C5 13.164 5.336 13.5 5.75 13.5C6.164 13.5 6.5 13.164 6.5 12.75C6.5 12.336 6.164 12 5.75 12ZM12.5 9.75C12.5 9.33525 12.164 9 11.75 9H8.75C8.336 9 8 9.33525 8 9.75C8 10.1648 8.336 10.5 8.75 10.5H11.75C12.164 10.5 12.5 10.1648 12.5 9.75ZM5.75 9C5.336 9 5 9.336 5 9.75C5 10.164 5.336 10.5 5.75 10.5C6.164 10.5 6.5 10.164 6.5 9.75C6.5 9.336 6.164 9 5.75 9ZM12.5 6.75C12.5 6.33525 12.164 6 11.75 6H8.75C8.336 6 8 6.33525 8 6.75C8 7.16475 8.336 7.5 8.75 7.5H11.75C12.164 7.5 12.5 7.16475 12.5 6.75ZM5.75 6C5.336 6 5 6.336 5 6.75C5 7.164 5.336 7.5 5.75 7.5C6.164 7.5 6.5 7.164 6.5 6.75C6.5 6.336 6.164 6 5.75 6Z"
                />
              </svg>

              <span
                class="ms-3 text-sm font-light group-hover:font-medium group-hover:text-[#fb3667]"
                :class="{
                  'text-[#fb3667]': currentPath.value === '/connectedapps',
                }"
                >Connected Apps</span
              >
            </a>
          </li>
          <li>
            <a
              href="#"
              class="sidenav group flex items-center rounded-lg border-l-4 border-transparent px-10 py-3 text-white hover:border-[#fb3667] hover:bg-gradient-to-r hover:from-[#fb366756]"
            >
              <svg
                class="h-5 w-5 text-white transition duration-75 group-hover:text-[#fb3667]"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2233_16470)">
                  <path
                    d="M18.0004 8.98611C17.9988 8.37557 17.8107 7.78009 17.4612 7.27944C17.1118 6.77879 16.6177 6.39688 16.0452 6.18486L16.0167 6.11661C15.2726 4.29668 13.8482 2.83864 12.0462 2.05236L11.7994 1.94436C11.587 1.37354 11.2051 0.88135 10.7049 0.533808C10.2047 0.186266 9.61022 0 9.00116 0C8.3921 0 7.7976 0.186266 7.29743 0.533808C6.79726 0.88135 6.41534 1.37354 6.20291 1.94436L5.88941 2.08536C4.10332 2.89659 2.69756 4.36357 1.96316 6.18261C1.38967 6.39155 0.894011 6.77128 0.542996 7.27062C0.19198 7.76996 0.00247602 8.3649 2.4097e-05 8.97527C-0.00242782 9.58563 0.18229 10.1821 0.529283 10.6842C0.876275 11.1864 1.36886 11.5701 1.94066 11.7836L2.03666 12.0086C2.78917 13.7553 4.17119 15.155 5.90816 15.9296L6.20291 16.0616C6.41594 16.6316 6.79801 17.1229 7.29796 17.4698C7.79792 17.8167 8.3919 18.0026 9.00041 18.0026C9.60891 18.0026 10.2029 17.8167 10.7029 17.4698C11.2028 17.1229 11.5849 16.6316 11.7979 16.0616L12.0732 15.9394C13.8901 15.1269 15.3186 13.6379 16.0549 11.7889C16.6255 11.5746 17.1173 11.1917 17.4649 10.691C17.8124 10.1903 17.9992 9.5956 18.0004 8.98611ZM9.00041 1.49886C9.29708 1.49886 9.58709 1.58683 9.83376 1.75165C10.0804 1.91647 10.2727 2.15074 10.3862 2.42483C10.4998 2.69892 10.5295 3.00052 10.4716 3.29149C10.4137 3.58246 10.2708 3.84974 10.0611 4.05952C9.85129 4.2693 9.58401 4.41216 9.29304 4.47004C9.00207 4.52791 8.70047 4.49821 8.42638 4.38468C8.15229 4.27114 7.91803 4.07889 7.7532 3.83221C7.58838 3.58554 7.50041 3.29553 7.50041 2.99886C7.50041 2.60103 7.65844 2.2195 7.93975 1.9382C8.22105 1.65689 8.60258 1.49886 9.00041 1.49886ZM2.99141 7.48761L3.05291 7.51086L3.06041 7.49211C3.43623 7.52573 3.78366 7.70613 4.02737 7.99419C4.27108 8.28226 4.39144 8.65477 4.36234 9.03097C4.33325 9.40717 4.15705 9.75675 3.87195 10.0039C3.58685 10.2511 3.21581 10.3759 2.83929 10.3514C2.46276 10.3268 2.11109 10.1548 1.8605 9.87273C1.60992 9.59063 1.48061 9.22113 1.50063 8.84434C1.52064 8.46754 1.68836 8.11382 1.96742 7.85985C2.24648 7.60588 2.6144 7.47214 2.99141 7.48761ZM9.00041 16.4989C8.70374 16.4989 8.41373 16.4109 8.16705 16.2461C7.92038 16.0812 7.72812 15.847 7.61459 15.5729C7.50106 15.2988 7.47135 14.9972 7.52923 14.7062C7.58711 14.4153 7.72997 14.148 7.93975 13.9382C8.14953 13.7284 8.4168 13.5856 8.70777 13.5277C8.99874 13.4698 9.30034 13.4995 9.57443 13.613C9.84852 13.7266 10.0828 13.9188 10.2476 14.1655C10.4124 14.4122 10.5004 14.7022 10.5004 14.9989C10.5004 15.3967 10.3424 15.7782 10.0611 16.0595C9.77976 16.3408 9.39823 16.4989 9.00041 16.4989ZM11.9202 14.3344C11.7709 13.6714 11.4004 13.0789 10.8697 12.6544C10.339 12.2299 9.67962 11.9987 9.00003 11.9987C8.32044 11.9987 7.66108 12.2299 7.13037 12.6544C6.59967 13.0789 6.22921 13.6714 6.07991 14.3344C5.05585 13.7755 4.21453 12.9334 3.65666 11.9089C4.31757 11.7595 4.90826 11.3904 5.33214 10.8618C5.75603 10.3332 5.98803 9.67639 5.9902 8.99883C5.99238 8.32126 5.76461 7.663 5.34413 7.13169C4.92365 6.60037 4.33534 6.22743 3.67541 6.07386C4.23534 5.06371 5.06871 4.23189 6.07991 3.67386C6.22983 4.3361 6.60046 4.9277 7.13096 5.35152C7.66145 5.77534 8.32028 6.0062 8.99928 6.0062C9.67829 6.0062 10.3371 5.77534 10.8676 5.35152C11.3981 4.9277 11.7687 4.3361 11.9187 3.67386C12.9291 4.23127 13.7629 5.06095 14.3254 6.06861C13.6634 6.2198 13.0726 6.59157 12.6498 7.12288C12.227 7.65419 11.9974 8.31347 11.9987 8.99248C12 9.67148 12.2321 10.3299 12.657 10.8595C13.0818 11.3892 13.6741 11.7587 14.3367 11.9074C13.777 12.9287 12.939 13.7703 11.9202 14.3344ZM15.0004 10.4861C14.7037 10.4861 14.4137 10.3981 14.1671 10.2333C13.9204 10.0685 13.7281 9.83422 13.6146 9.56013C13.5011 9.28604 13.4714 8.98444 13.5292 8.69347C13.5871 8.4025 13.73 8.13523 13.9397 7.92545C14.1495 7.71567 14.4168 7.57281 14.7078 7.51493C14.9987 7.45705 15.3003 7.48676 15.5744 7.60029C15.8485 7.71382 16.0828 7.90608 16.2476 8.15275C16.4124 8.39943 16.5004 8.68944 16.5004 8.98611C16.5004 9.38393 16.3424 9.76546 16.0611 10.0468C15.7798 10.3281 15.3982 10.4861 15.0004 10.4861Z"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2233_16470">
                    <rect width="18" height="18" />
                  </clipPath>
                </defs>
              </svg>

              <span
                class="ms-3 text-sm font-light group-hover:font-medium group-hover:text-[#fb3667]"
                >Activity</span
              >
            </a>
          </li>
        </ul>
        <hr class="border border-gray-700" />
        <ul class="mt-16 font-medium">
          <li>
            <a
              href="#"
              class="sidenav group flex items-center rounded-lg border-l-4 border-transparent px-10 py-3 text-white hover:border-[#fb3667] hover:bg-gradient-to-r hover:from-[#fb366756]"
            >
              <svg
                class="h-5 w-5 text-white transition duration-75 group-hover:text-[#fb3667]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"
                />
                <path
                  d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"
                />
                <path
                  d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"
                />
              </svg>
              <span
                class="ms-3 text-sm font-light group-hover:font-medium group-hover:text-[#fb3667]"
                >Settings</span
              >
            </a>
          </li>
        </ul>
      </div>
    </aside>
    <!-- Main content -->
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
const currentPath = ref("");

if (typeof window !== "undefined") {
  currentPath.value = window.location.pathname;
}
</script>

<style scoped></style>
