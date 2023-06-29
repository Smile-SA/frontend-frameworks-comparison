import { Slot, component$ } from "@builder.io/qwik";

import DynamicFooter from "../../components/DynamicFooter/DynamicFooter";
import DynamicHeader from "../../components/DynamicHeader/DynamicHeader";

export default component$(() => {
  return (
    <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
      <DynamicHeader />
      <div
        role="main"
        class="main-container container-fluid js-quickedit-main-content"
      >
        <div class="row">
          <Slot />
        </div>
      </div>
      <DynamicFooter />
    </div>
  );
});
