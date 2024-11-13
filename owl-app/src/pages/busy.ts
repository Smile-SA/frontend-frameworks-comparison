import { Component, xml } from "@odoo/owl";

import { BusyHomepage } from "../components/BusyHomepage";
import { DynamicLayout } from "../layouts/DynamicLayout";

export default class Index extends Component {
  static template = xml`<DynamicLayout>
  <BusyHomepage />
</DynamicLayout>`;
  static components = { BusyHomepage, DynamicLayout };
}
