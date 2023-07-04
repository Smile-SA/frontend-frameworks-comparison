import type { V2_MetaFunction } from "@remix-run/node";

import Homepage from "~/components/Homepage";
import DynamicLayout from "~/layouts/DynamicLayout";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <DynamicLayout>
      <Homepage />
    </DynamicLayout>
  );
}
