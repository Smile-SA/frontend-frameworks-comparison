<script lang="ts">
	import type { PageData } from './$types';

	import DynamicLayout from '../../layouts/DynamicLayout.svelte';
	import AsyncHomepage from '../../components/AsyncHomepage.svelte';

	export let data: PageData;

	let count = 0;
	let start = false;
	let time = 0;

	const channel = new MessageChannel();
	const port = channel.port2;
	channel.port1.onmessage = () => {
		count = count + 1;
		increment();
	};

	function startCount() {
		if (count === 0) {
			time = Date.now();
			start = true;
			increment();
		} else {
			count = 0;
		}
	}

	function increment() {
		if (start) {
			if (Date.now() - time < 1000) {
				port.postMessage('');
			} else {
				start = false;
			}
		}
	}
</script>

<DynamicLayout>
	<AsyncHomepage
		cards={data.cards}
		openSources={data.openSources}
		solutions={data.solutions}
		technologies={data.technologies}
		{count}
		on:start={startCount}
	/>
</DynamicLayout>
