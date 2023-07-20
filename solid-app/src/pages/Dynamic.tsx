import { Component } from "solid-js";

import DynamicLayout from "../layouts/DynamicLayout";
import DynamicHomepage from "../components/DynamicHomepage";

const dynamic: Component = () => {
  return (
    <DynamicLayout>
      <DynamicHomepage />
    </DynamicLayout>
  );
};

export default dynamic;
