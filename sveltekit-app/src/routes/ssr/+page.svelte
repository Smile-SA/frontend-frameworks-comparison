<script lang="ts">
	import type { PageData } from './$types';

	import DynamicLayout from '../../layouts/DynamicLayout.svelte';
	import AsyncHomepage from '../../components/AsyncHomepage.svelte';

	export let data: PageData;
</script>

<DynamicLayout>
	<AsyncHomepage
		cards={data.cards}
		openSources={data.openSources}
		solutions={data.solutions}
		technologies={data.technologies}
	/>
</DynamicLayout>
