import Alpine from "/node_modules/alpinejs/dist/module.esm.js";

const channel = new MessageChannel();
const port = channel.port2;
let start = false;
let time = 0;

Alpine.data("counter", () => ({
  count: 0,

  async init() {
    channel.port1.onmessage = () => {
      this.count++;
      this.increment();
    };
  },

  startCount() {
    if (this.count === 0) {
      time = Date.now();
      start = true;
      this.increment();
    } else {
      this.count = 0;
    }
  },

  increment() {
    if (start) {
      if (Date.now() - time < 1000) {
        port.postMessage("");
      } else {
        start = false;
      }
    }
  },
}));
