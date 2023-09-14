<script lang="ts">
	import type { PageData } from './$types';

	import DynamicLayout from '../../layouts/DynamicLayout.svelte';
	import BusyHomepage from '../../components/BusyHomepage.svelte';

	export let data: PageData;
</script>

<DynamicLayout>
	<BusyHomepage
		cards={data.cards}
		openSources={data.openSources}
		solutions={data.solutions}
		technologies={data.technologies}
	/>
</DynamicLayout>
