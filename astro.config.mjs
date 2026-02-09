import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
// import pdf from "astro-pdf";

export default defineConfig({
  site: "https://www.snesjhon.com",
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false, // Don't auto-inject Tailwind into all pages
    }),
    // pdf({
    //   baseOptions: {
    //     pdf: {
    //       scale: 0.93,
    //       margin: {
    //         top: "0.1in",
    //         bottom: "0.1in",
    //         left: "0.2in",
    //         right: "0.2in",
    //       },
    //     },
    //   },
    //   pages: {
    //     "/resume": true,
    //   },
    // }),
  ],
  markdown: {
    syntaxHighlight: false,
  },
});
