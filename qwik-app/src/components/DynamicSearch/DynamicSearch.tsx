import { component$, useSignal } from "@builder.io/qwik";

export default component$(() => {
  const search = useSignal("");
  return (
    <input
      title=""
      data-drupal-selector="edit-search-api-fulltext"
      class="form-search form-control"
      placeholder="Mots-clés, technologies, etc."
      type="search"
      id="edit-search-api-fulltext"
      name="search_api_fulltext"
      value={search.value}
      size={150}
      maxLength={128}
      data-toggle="tooltip"
      data-original-title=""
      onChange$={(e) => (search.value = e.target.value)}
    />
  );
});
