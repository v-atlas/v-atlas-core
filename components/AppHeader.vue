<template>
  <nav>
    <div class="content">
      <div class="left">
        <div class="brand">
          <div class="brand-icon">
            <nuxt-link to="/">
              <span class="brand-text"> V Atlas </span>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
nav {
  background-color: $primary-blue;
  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
  div.content {
    div.left {
      div.brand {
        div.brand-icon {
          a {
            text-decoration: none;
            span.brand-text {
              font-size: 1.5rem;
              font-weight: 700;
              color: $primary-light;
            }
          }
        }
      }
    }
  }
}
</style>
