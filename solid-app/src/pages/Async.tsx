import { Component } from "solid-js";

import DynamicLayout from "../layouts/DynamicLayout";
import AsyncHomepage from "../components/AsyncHomepage";

const Async: Component = () => {
  return (
    <DynamicLayout>
      <AsyncHomepage />
    </DynamicLayout>
  );
};

export default Async;
