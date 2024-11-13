import { Component, xml } from "@odoo/owl";

import { AsyncHomepage } from "../components/AsyncHomepage";
import { DynamicLayout } from "../layouts/DynamicLayout";

export default class Index extends Component {
  static template = xml`<DynamicLayout>
  <AsyncHomepage />
</DynamicLayout>`;
  static components = { AsyncHomepage, DynamicLayout };
}
