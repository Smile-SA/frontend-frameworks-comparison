import type { ReactNode } from "react";

import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

interface IStaticLayoutProps {
  children: ReactNode;
}

function StaticLayout(props: IStaticLayoutProps) {
  const { children } = props;
  return (
    <div
      className="dialog-off-canvas-main-canvas"
      data-off-canvas-main-canvas=""
    >
      <Header />
      <div
        role="main"
        className="main-container container-fluid js-quickedit-main-content"
      >
        <div className="row">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default StaticLayout;
