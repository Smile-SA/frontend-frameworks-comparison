import type { DocumentHead } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

import DynamicLayout from "~/Layouts/DynamicLayout/DynamicLayout";
import DynamicHomepage from "~/components/DynamicHomepage/DynamicHomepage";

export default component$(() => {
  return (
    <DynamicLayout>
      <DynamicHomepage />
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
