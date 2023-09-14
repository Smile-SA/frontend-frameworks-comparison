import { Component } from "solid-js";

import DynamicLayout from "../layouts/DynamicLayout";
import BusyHomepage from "../components/BusyHomepage";

const Busy: Component = () => {
  return (
    <DynamicLayout>
      <BusyHomepage />
    </DynamicLayout>
  );
};

export default Busy;
