<script setup lang="ts">
import { useHead } from "unhead";

useHead({
  script: [
    {
      src: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
      integrity: "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=",
      crossOrigin: "",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="dynamic">
    <AsyncHomepage />
  </NuxtLayout>
</template>
