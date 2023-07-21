import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

import DynamicLayout from "~/Layouts/DynamicLayout";
import AsyncHomepage from "~/components/AsyncHomepage";
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

const channel = new MessageChannel();
const port = channel.port2;

export default component$(() => {
  const openSources = useOpenSources();
  const cards = useCards();
  const solutions = useSolutions();
  const technologies = useTechnologies();

  const count = useSignal(0);
  const start = useSignal(false);
  const time = useSignal(0);

  const increment = $(() => {
    if (start.value) {
      if (Date.now() - time.value < 1000) {
        port.postMessage("");
      } else {
        start.value = false;
      }
    }
  })

  const startCount = $(() => {
    if (count.value === 0) {
      time.value = Date.now();
      start.value = true;
      increment();
    } else {
      count.value = 0;
    }
  })

  useVisibleTask$(() => {
    channel.port1.onmessage = () => {
      count.value = count.value + 1;
      increment();
    };
  });

  return (
    <DynamicLayout>
      <AsyncHomepage
        cards={cards.value}
        openSources={openSources.value}
        solutions={solutions.value}
        technologies={technologies.value}
        count={count}
        onStart={startCount}
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
