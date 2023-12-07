import Alpine from "/node_modules/alpinejs/dist/module.esm.js";

Alpine.data("busy", () => ({
  diff: 0,

  async init() {
    let start = performance.now();
    for (let i = 0; i < 100_000; i++) {
      for (let j = 0; j < 100_000; j++) {
        if (i % 2 === 0) {
          start += j;
        } else {
          start -= j;
        }
      }
    }
    this.diff = Math.round(performance.now() - start);
  },
}));
