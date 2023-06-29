import type { ReactNode } from "react";

import React from "react";

import DynamicFooter from "../../components/DynamicFooter/DynamicFooter";
import DynamicHeader from "../../components/DynamicHeader/DynamicHeader";

interface IDynamicLayoutProps {
  children: ReactNode;
}

function DynamicLayout(props: IDynamicLayoutProps) {
  const { children } = props;
  return (
    <div
      className="dialog-off-canvas-main-canvas"
      data-off-canvas-main-canvas=""
    >
      <DynamicHeader />
      <div
        role="main"
        className="main-container container-fluid js-quickedit-main-content"
      >
        <div className="row">{children}</div>
      </div>
      <DynamicFooter />
    </div>
  );
}

export default DynamicLayout;
