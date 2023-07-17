<script>
	import DynamicHeader from '../components/DynamicHeader.svelte';
	import DynamicFooter from '../components/DynamicFooter.svelte';
</script>

<div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
	<DynamicHeader />
	<div role="main" class="main-container container-fluid js-quickedit-main-content">
		<div class="row"><slot /></div>
	</div>
	<DynamicFooter />
</div>
