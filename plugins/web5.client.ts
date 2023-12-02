import { Web5 } from "@web5/api/browser";

export default defineNuxtPlugin({
  async setup(nuxtApp) {
    const { web5, did: myDID } = await Web5.connect({
      sync: "5s",
    });

    return {
      provide: {
        web5,
        myDID,
      },
    };
  },
});
