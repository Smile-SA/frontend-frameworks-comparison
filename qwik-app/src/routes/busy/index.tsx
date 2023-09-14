import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import DynamicLayout from "~/Layouts/DynamicLayout";
import BusyHomepage from "~/components/BusyHomepage";
import { ISolution } from "~/components/AsyncTabs";
import { IOpenSource } from "~/components/AsyncOpenSource";
import { ICard } from "~/components/AsyncCards";

export const useOpenSources = routeLoader$(async () => {
  const res = await fetch("http://localhost:3333/opensource");
  const data = await res.json();
  return data as [IOpenSource, IOpenSource];
});

export const useCards = routeLoader$(async () => {
  const res = await fetch("http://localhost:3333/cards");
  const data = await res.json();
  return data as ICard[];
});

export const useSolutions = routeLoader$(async () => {
  const res = await fetch("http://localhost:3333/solutions");
  const data = await res.json();
  return data as ISolution[];
});

export const useTechnologies = routeLoader$(async () => {
  const res = await fetch("http://localhost:3333/technologies");
  const data = await res.json();
  return data as ISolution[];
});

export default component$(() => {
  const openSources = useOpenSources();
  const cards = useCards();
  const solutions = useSolutions();
  const technologies = useTechnologies();

  return (
    <DynamicLayout>
      <BusyHomepage
        cards={cards.value}
        openSources={openSources.value}
        solutions={solutions.value}
        technologies={technologies.value}
      />
    </DynamicLayout>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
