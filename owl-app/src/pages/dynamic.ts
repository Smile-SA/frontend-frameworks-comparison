import { Component, xml } from "@odoo/owl";

import { DynamicHomepage } from "../components/DynamicHomepage";
import { DynamicLayout } from "../layouts/DynamicLayout";

export default class Index extends Component {
  static template = xml`<DynamicLayout>
  <DynamicHomepage />
</DynamicLayout>`;
  static components = { DynamicHomepage, DynamicLayout };
}
