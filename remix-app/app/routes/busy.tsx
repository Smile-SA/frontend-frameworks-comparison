import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import BusyHomepage, { IData } from "~/components/BusyHomepage";
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
      <BusyHomepage data={data} />
    </DynamicLayout>
  );
}

export const loader = async () => {
  const [cards, openSources, solutions, technologies, diff] = await Promise.all(
    [
      fetch("http://localhost:3333/cards").then((r) => r.json()),
      fetch("http://localhost:3333/opensource").then((r) => r.json()),
      fetch("http://localhost:3333/solutions").then((r) => r.json()),
      fetch("http://localhost:3333/technologies").then((r) => r.json()),
      new Promise((resolve) => {
        let start = performance.now();
        for (let i = 0; i < 100_000; i++) {
          for (let j = 0; j < 100_000; j++) {
            if (i % 2 === 0) {
              start += j;
            } else {
              start -= j;
            }
          }
        }
        resolve(Math.round(performance.now() - start));
      }),
    ]
  );
  const data: IData = {
    cards,
    diff,
    openSources,
    solutions,
    technologies,
  };
  return data;
};
