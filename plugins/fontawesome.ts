import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCopy,
  faArrowRight,
  faCircleNotch,
  faTimes,
  faRefresh,
  faQrcode,
  faTimesCircle,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import {
  faSpotify,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  ...[
    faArrowRight,
    faCircleNotch,
    faTimes,
    faCopy,
    faRefresh,
    faQrcode,
    faSpotify,
    faTimesCircle,
    faCheckCircle,
    faXTwitter,
    faInstagram,
    faLinkedin,
  ]
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
