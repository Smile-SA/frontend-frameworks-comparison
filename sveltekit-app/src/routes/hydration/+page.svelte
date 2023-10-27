<script lang="ts">
	import type { PageData } from './$types';

	import DynamicLayout from '../../layouts/DynamicLayout.svelte';
	import HydrationHomepage from '../../components/HydrationHomepage.svelte';

	export let data: PageData;
</script>

<DynamicLayout>
	<HydrationHomepage
		cards={data.cards}
		openSources={data.openSources}
		solutions={data.solutions}
		technologies={data.technologies}
	/>
</DynamicLayout>
