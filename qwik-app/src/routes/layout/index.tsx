import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import DynamicLayout from "~/Layouts/DynamicLayout";
import Homepage from "~/components/Homepage";

export default component$(() => {
  return (
    <DynamicLayout>
      <Homepage />
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
