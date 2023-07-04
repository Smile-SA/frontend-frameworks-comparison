import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import StaticLayout from "~/Layouts/StaticLayout";
import Homepage from "~/components/Homepage";

export default component$(() => {
  return (
    <StaticLayout>
      <Homepage />
    </StaticLayout>
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
