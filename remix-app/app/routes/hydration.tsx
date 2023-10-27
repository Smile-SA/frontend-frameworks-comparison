import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import HydrationHomepage, { IData } from "~/components/HydrationHomepage";
import DynamicLayout from "~/layouts/DynamicLayout";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const data = useLoaderData<IData>();

  return (
    <DynamicLayout>
      <HydrationHomepage data={data} />
    </DynamicLayout>
  );
}

export const loader = async () => {
  const [cards, openSources, solutions, technologies] = await Promise.all([
    fetch("http://localhost:3333/cards").then((r) => r.json()),
    fetch("http://localhost:3333/opensource").then((r) => r.json()),
    fetch("http://localhost:3333/solutions").then((r) => r.json()),
    fetch("http://localhost:3333/technologies").then((r) => r.json()),
  ]);
  const data: IData = {
    cards,
    openSources,
    solutions,
    technologies,
  };
  return data;
};
