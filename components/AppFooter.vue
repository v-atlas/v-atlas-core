<template>
  <footer class="border-t-2 border-t-white bg-black px-10 py-5 md:px-20">
    <div class="flex flex-col md:flex-row md:justify-between">
      <div class="left flex flex-col justify-center">
        <div class="brand">
          <span class="brand-text text-3xl font-bold"> V Atlas </span>
        </div>
      </div>
      <div class="right flex flex-col gap-5">
        <div class="resources">
          <ul class="m-0 flex list-none flex-col gap-2 p-0">
            <li data-label="Email">
              <a
                href="mailto:hello@vatlas.com"
                class="email text-sm no-underline"
              >
                hello@vatlas.com
              </a>
            </li>
            <li data-label="Address">
              <p class="address text-sm">
                251 Little Falls Drive, Wilmington, New Castle County, Delaware.
              </p>
            </li>
          </ul>
        </div>

        <div class="socials">
          <ul class="m-0 flex list-none flex-row gap-2 p-0">
            <li>
              <a
                class="text-white no-underline"
                target="blank"
                href="https://twitter.com"
              >
                <font-awesome-icon
                  class="text-xl"
                  icon="fa-brands fa-x-twitter"
                />
              </a>
            </li>
            <li>
              <a
                class="text-white no-underline"
                target="blank"
                href="https://instagram.com"
              >
                <font-awesome-icon
                  class="text-xl"
                  icon="fa-brands fa-instagram"
                />
              </a>
            </li>
            <li>
              <a
                class="text-white no-underline"
                target="blank"
                href="https://linkedin.com"
              >
                <font-awesome-icon
                  class="text-xl"
                  icon="fa-brands fa-linkedin"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped></style>
