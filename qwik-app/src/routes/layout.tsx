import { component$, Slot } from "@builder.io/qwik";

import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

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
