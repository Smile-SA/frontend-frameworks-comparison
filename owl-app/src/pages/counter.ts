import { Component, onMounted, useState, xml } from "@odoo/owl";

import { AsyncHomepage } from "../components/AsyncHomepage";
import { DynamicLayout } from "../layouts/DynamicLayout";

const channel = new MessageChannel();
const port = channel.port2;
let start = false;
let time = 0;

export default class Index extends Component {
  static template = xml`<DynamicLayout>
  <AsyncHomepage count="state.count" onStart.bind="startCount" />
</DynamicLayout>`;
  static components = { AsyncHomepage, DynamicLayout };
  state = useState({ count: 0 });
  startCount(e: MouseEvent) {
    e.preventDefault();
    if (this.state.count === 0) {
      time = Date.now();
      start = true;
      this.increment();
    } else {
      this.state.count = 0;
    }
  }
  increment() {
    if (start) {
      if (Date.now() - time < 1000) {
        port.postMessage("");
      } else {
        start = false;
      }
    }
  }
  setup() {
    onMounted(() => {
      channel.port1.onmessage = () => {
        this.state.count = this.state.count + 1;
        this.increment();
      };
    });
  }
}
