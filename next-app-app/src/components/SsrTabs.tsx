import AsyncTabs from "./AsyncTabs";

export interface ISolution {
  title: string;
  description: string;
  url: string;
  image: string;
  mobileImage: string;
}

async function getSolutions() {
  const res = await fetch("http://localhost:3333/solutions", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getTechnologies() {
  const res = await fetch("http://localhost:3333/technologies", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function SsrTabs() {
  const [solutions, technologies] = await Promise.all([
    getSolutions(),
    getTechnologies(),
  ]);

  return <AsyncTabs solutions={solutions} technologies={technologies} />;
}
