// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: "path-frontpage page-node-type-page has-glyphicons",
      },
      link: [
        {
          rel: "icon",
          type: "image/vnd.microsoft.icon",
          href: "http://localhost:3333/favicon.ico",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "http://localhost:3333/css_OIzBRxciYG74p5zSuRGfzMOMmxX2w4G6eJ9zFXXGLgE.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "http://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "http://localhost:3333/css_uGznCPRfy4VyscOn7wc-83IOi6ex6Osgx7AS18BCoFI.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "http://cdn.jsdelivr.net/bootstrap/3.3.7/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "http://localhost:3333/css_iZHYdEhagxtlMnc7tQBGAPpfu3YF-FwbR8QCKEILwYQ.css",
        },
      ],
    },
  },
  css: [],
  devtools: { enabled: true },
  dir: {
    public: "static/public",
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ["/dynamic", "/layout", "/ssg", "/busy", "/hydration"],
    },
  },
});
