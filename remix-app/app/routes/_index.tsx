import type { V2_MetaFunction } from "@remix-run/node";

import Homepage from "~/components/Homepage/Homepage";
import StaticLayout from "~/layouts/StaticLayout/StaticLayout";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <StaticLayout>
      <Homepage />
    </StaticLayout>
  );
}
