<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import type { ICard } from '../types/cards';
	import type { IOpenSource } from '../types/openSource';
	import type { ISolution } from '../types/tabs';

	import AsyncMap from './AsyncMap.svelte';
	import AsyncTabs from './AsyncTabs.svelte';
	import AsyncCards from './AsyncCards.svelte';
	import AsyncOpenSource from './AsyncOpenSource.svelte';

	const dispatch = createEventDispatcher();
	export let cards: ICard[];
	export let diff: number;
	export let openSources: IOpenSource[];
	export let solutions: ISolution[];
	export let technologies: ISolution[];

	function handleStart(event: any) {
		event.preventDefault();
		dispatch('start');
	}
</script>

<section class="col-sm-12">
	<a id="main-content" />
	<div class="region region-content-top">
		<div data-drupal-messages-fallback="" class="hidden" />
	</div>

	<div class="region region-content">
		<article
			data-history-node-id="4"
			role="article"
			about="/fr/homepage"
			typeof="schema:WebPage"
			class="page full clearfix"
		>
			<div class="content">
				<div class="field--item">
					<div class="full-new-homepage">
						<div class="block-header-block homepage-yellow">
							<div class="logo-block-hp">
								<a href="#" rel="external">
									<img
										class="block-content-block_header_block__btn-logo-smile"
										src="http://localhost:3333/icons/logo_yellow.png"
									/>
								</a>
							</div>
							<div class="container">
								<div
									class="field field--name-field-header-text-paragraph field--type-entity-reference-revisions field--label-hidden field--item"
								>
									<div class="block-content-block_header_block__paragraph new-header-homepage">
										<div class="text-new-header">
											<p>CRÉATEUR D&apos;EXPÉRIENCE DIGITALE OUVERTE</p>
										</div>
										<div class="link-single-part">
											<div class="link-content">
												<a href="/fr/nos-references" class="btn blue" rel="external">
													Découvrez nos projets
												</a>
											</div>
										</div>
										<h1 class="tag-new-header">#MadeWithSmile</h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<AsyncOpenSource {openSources} />
				<AsyncCards {cards} />
				<div class="field--item">
					<div class="block-content block-content-map">
						<div class="map--kpi">
							<div
								class="field field--name-field-map-kpi field--type-entity-reference field--label-hidden field--items"
							>
								<div class="field--item">
									<div class="block-content block-content-kpi singleblock-text">
										<div class="title">17</div>
										<div class="subtitle">Agences</div>
									</div>
								</div>
								<div class="field--item">
									<div class="block-content block-content-kpi singleblock-text">
										<div class="title">9</div>
										<div class="subtitle">PAYS</div>
									</div>
								</div>
								<div class="field--item">
									<div class="block-content block-content-kpi singleblock-text">
										<div class="title">{diff}</div>
										<div class="subtitle">SMILIENS</div>
									</div>
								</div>
							</div>
							<div class="link-map">
								<div class="link-map-content">
									<button
										type="button"
										on:click={handleStart}
										style="border: 0; background: transparent;"
									>
										Découvrez smile
									</button>
								</div>
							</div>
						</div>
						<AsyncMap />
					</div>
				</div>
				<AsyncTabs {solutions} {technologies} />
			</div>
		</article>
	</div>
</section>
