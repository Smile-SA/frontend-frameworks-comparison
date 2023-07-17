<script lang="ts">
	import type { PageData } from './$types';

	import DynamicLayout from '../../layouts/DynamicLayout.svelte';
	import AsyncHomepage from '../../components/AsyncHomepage.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<script
		src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
		integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
		crossorigin=""
	></script>
</svelte:head>

<DynamicLayout>
	<AsyncHomepage
		cards={data.cards}
		openSources={data.openSources}
		solutions={data.solutions}
		technologies={data.technologies}
	/>
</DynamicLayout>
