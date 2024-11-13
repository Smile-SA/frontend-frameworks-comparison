import { resolve } from "path";

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        layout: resolve(__dirname, "layout.html"),
        dynamic: resolve(__dirname, "dynamic.html"),
        async: resolve(__dirname, "async.html"),
        counter: resolve(__dirname, "counter.html"),
        busy: resolve(__dirname, "busy.html"),
      },
    },
  },
};
