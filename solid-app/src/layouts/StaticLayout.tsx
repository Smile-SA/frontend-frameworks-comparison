import { ParentComponent } from "solid-js";

import Header from "../components/Header";
import Footer from "../components/Footer";

const StaticLayout: ParentComponent = (props) => {
  return (
    <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
      <Header />
      <div
        role="main"
        class="main-container container-fluid js-quickedit-main-content"
      >
        <div class="row">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StaticLayout;
