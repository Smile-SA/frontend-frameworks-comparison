"use client";

import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  return (
    <input
      title=""
      data-drupal-selector="edit-search-api-fulltext"
      className="form-search form-control"
      placeholder="Mots-clés, technologies, etc."
      type="search"
      id="edit-search-api-fulltext"
      name="search_api_fulltext"
      value={search}
      size={150}
      maxLength={128}
      data-toggle="tooltip"
      data-original-title=""
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
