import { Component, xml } from "@odoo/owl";

import { DynamicHeader } from "../components/DynamicHeader";
import { DynamicFooter } from "../components/DynamicFooter";

export class DynamicLayout extends Component {
  static template = xml`<div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
  <DynamicHeader />
  <div role="main" class="main-container container-fluid js-quickedit-main-content">
    <div class="row"><t t-slot="default"/></div>
  </div>
  <DynamicFooter />
</div>`;
  static components = { DynamicFooter, DynamicHeader };
}
