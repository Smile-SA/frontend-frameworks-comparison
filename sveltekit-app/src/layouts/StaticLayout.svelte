<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas="">
	<Header />
	<div role="main" class="main-container container-fluid js-quickedit-main-content">
		<div class="row"><slot /></div>
	</div>
	<Footer />
</div>
