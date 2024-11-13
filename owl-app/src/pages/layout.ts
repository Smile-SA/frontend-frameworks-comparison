import { Component, xml } from "@odoo/owl";

import { Homepage } from "../components/Homepage";
import { DynamicLayout } from "../layouts/DynamicLayout";

export default class Index extends Component {
  static template = xml`<DynamicLayout>
  <Homepage />
</DynamicLayout>`;
  static components = { Homepage, DynamicLayout };
}
