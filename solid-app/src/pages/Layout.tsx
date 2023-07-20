import { Component } from "solid-js";

import DynamicLayout from "../layouts/DynamicLayout";
import Homepage from "../components/Homepage";

const Layout: Component = () => {
  return (
    <DynamicLayout>
      <Homepage />
    </DynamicLayout>
  );
};

export default Layout;
