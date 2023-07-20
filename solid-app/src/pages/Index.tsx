import { Component } from "solid-js";

import StaticLayout from "../layouts/StaticLayout";
import Homepage from "../components/Homepage";

const Index: Component = () => {
  return (
    <StaticLayout>
      <Homepage />
    </StaticLayout>
  );
};

export default Index;
