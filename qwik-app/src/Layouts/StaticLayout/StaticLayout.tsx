import { Slot, component$ } from "@builder.io/qwik";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default component$(() => {
  return (
    <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
      <Header />
      <div
        role="main"
        class="main-container container-fluid js-quickedit-main-content"
      >
        <div class="row">
          <Slot />
        </div>
      </div>
      <Footer />
    </div>
  );
});
