<script>
	import DynamicLayout from '../../layouts/DynamicLayout.svelte';
	import DynamicHomepage from '../../components/DynamicHomepage.svelte';
</script>

<svelte:head>
	<script
		src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
		integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
		crossorigin=""
	></script>
</svelte:head>

<DynamicLayout>
	<DynamicHomepage />
</DynamicLayout>
