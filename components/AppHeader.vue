<template>
  <header>
    <nav class="fixed top-0 z-50 w-full bg-primary">
      <div class="px-3 py-5 md:px-8">
        <div class="flex items-center justify-between">
          <div
            class="flex items-center justify-start rtl:justify-end md:basis-[60%]"
          >
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              class="inline-flex items-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
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
                class="self-center whitespace-nowrap text-xl font-semibold text-white md:text-2xl"
                >VAtlas</span
              >
            </a>
            <input
              class="ml-16 hidden h-10 w-full rounded-[11px] bg-[#1e2334] border border-[#343950] px-[14px] py-[11px] md:block"
              type="text"
              placeholder="Search..."
            />
          </div>

          <div class="flex items-center">
            <div class="ms-3 flex items-center">
              <div>
                <button
                  type="button"
                  class="flex items-start gap-[14px] rounded-full bg-primary text-sm"
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
                    <p class="text-white" role="none">John Doe</p>
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
                class="border-grey-800 z-50 my-4 hidden list-none divide-y divide-gray-600 rounded border bg-primary text-base shadow"
                id="dropdown-user"
              >
                <div class="px-4 py-3" role="none">
                  <p class="text-sm text-white" role="none">John Doe</p>
                  <p
                    class="truncate text-sm font-medium text-gray-300"
                    role="none"
                  >
                    example@vatlas.dev
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <nuxt-link
                      to="/"
                      class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                      role="menuitem"
                    >
                      Dashboard
                    </nuxt-link>
                  </li>
                  <li>
                    <nuxt-link
                      to="/settings"
                      class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                      role="menuitem"
                    >
                      Settings
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped></style>
