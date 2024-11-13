import { loadFile, mount } from "@odoo/owl";

import "./assets/main.css";

function getComponent() {
  switch (location.pathname.split(".")[0]) {
    case "/layout":
      return import("./pages/layout");
    case "/dynamic":
      return import("./pages/dynamic");
    case "/async":
      return import("./pages/async");
    case "/counter":
      return import("./pages/counter");
    case "/busy":
      return import("./pages/busy");
    default:
      return import("./pages");
  }
}

async function getTemplates() {
  return loadFile(`./Homepage.xml`);
}

Promise.all([getComponent(), getTemplates()]).then(([module, templates]) => {
  mount(module.default, document.body, { templates });
});
