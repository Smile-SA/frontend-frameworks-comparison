import { Component, xml } from "@odoo/owl";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export class StaticLayout extends Component {
  static template = xml`<div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
  <Header />
  <div role="main" class="main-container container-fluid js-quickedit-main-content">
    <div class="row"><t t-slot="default"/></div>
  </div>
  <Footer />
</div>`;
  static components = { Header, Footer };
}
