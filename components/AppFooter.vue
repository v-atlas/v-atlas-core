<template>
  <footer>
    <div class="content">
      <div class="left">
        <div class="brand">
          <span class="brand-text"> V Atlas </span>
        </div>
      </div>
      <div class="right">
        <div class="resources">
          <ul>
            <li data-label="Email">
              <a href="mailto:hello@vatlas.com" class="email">
                hello@vatlas.com
              </a>
            </li>
            <li data-label="Address">
              <p class="address">
                251 Little Falls Drive, Wilmington, New Castle County, Delaware.
              </p>
            </li>
          </ul>
        </div>

        <div class="socials">
          <ul>
            <li>
              <a target="blank" href="https://twitter.com">
                <font-awesome-icon icon="fa-brands fa-x-twitter" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://instagram.com">
                <font-awesome-icon icon="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a target="blank" href="https://linkedin.com">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
footer {
  background-color: $primary-dark;
  border-top: 2px solid $primary-light;

  padding: 20px 20px;

  @media screen and (min-width: 768px) {
    padding: 20px 50px;
  }
  div.content {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
    div.left {
      display: flex;
      flex-direction: column;

      @media screen and (min-width: 768px) {
        justify-content: center;
      }

      div.brand {
        span.brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: $primary-light;
        }
      }
    }

    div.right {
      display: flex;
      flex-direction: column;
      gap: 10px;

      @media screen and (min-width: 768px) {
        margin-left: auto;
        flex-direction: row;
      }

      div.socials {
        ul {
          display: flex;
          flex-direction: row;
          list-style: none;
          align-items: center;
          justify-content: center;

          -webkit-padding-start: 0;
          margin: 0;
          padding: 0;

          height: 50px;

          @media screen and (min-width: 768px) {
            margin-left: auto;
            justify-content: flex-end;
          }

          li {
            a {
              color: $primary-light;
              text-decoration: none;
              font-size: 1.5rem;
              margin: 0 10px;
            }
          }
        }
      }
      div.resources {
        ul {
          display: flex;
          flex-direction: column;

          -webkit-padding-start: 0;
          list-style: none;
          height: 100%;
          margin: 0;
          padding: 0;

          gap: 20px;

          li {
            &::before {
              content: attr(data-label);
              color: $primary-light;
              font-size: 0.8rem;
              font-weight: 700;
              margin: 0;
              text-transform: uppercase;
              display: block;
            }

            p {
              color: $primary-light;
              font-size: 0.8rem;
              font-weight: 400;
              margin: 0;

              max-width: 200px;
              line-height: 1.5;
            }

            a {
              color: $primary-light;
              font-size: 0.8rem;
              font-weight: 400;
              margin: 0;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
