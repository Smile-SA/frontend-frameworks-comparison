import { Component, xml } from "@odoo/owl";

import { Homepage } from "../components/Homepage";
import { StaticLayout } from "../layouts/StaticLayout";

export default class Index extends Component {
  static template = xml`<StaticLayout>
  <Homepage />
</StaticLayout>`;
  static components = { Homepage, StaticLayout };
}
