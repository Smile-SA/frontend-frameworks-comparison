import React from "react"

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// import "./Layout.css"

export default function Layout({ children }: { children: React.ReactNode }) {
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
