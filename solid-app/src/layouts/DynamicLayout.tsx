import { ParentComponent } from "solid-js";

import DynamicHeader from "../components/DynamicHeader";
import DynamicFooter from "../components/DynamicFooter";

const DynamicLayout: ParentComponent = (props) => {
  return (
    <div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
      <DynamicHeader />
      <div
        role="main"
        class="main-container container-fluid js-quickedit-main-content"
      >
        <div class="row">
          {props.children}
        </div>
      </div>
      <DynamicFooter />
    </div>
  );
};

export default DynamicLayout;
