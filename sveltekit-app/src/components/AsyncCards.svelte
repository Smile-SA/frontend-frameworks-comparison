<script lang="ts">
	import type { ICard } from '../types/cards';

	export let cards: ICard[];

	const groupedCards: ICard[][] = [];
	for (let i = 0; i < cards.length; i += 3) {
		groupedCards.push(cards.slice(i, i + 3));
	}
</script>

<div class="field--item">
	<section class="block-content block-content-preview_pages">
		{#each groupedCards as group}
			<div class="block-content--preview-pages__row">
				{#each group as card}
					{#if card.type === 'reference'}
						<div
							class="block-content--preview-pages__col block-content--preview-pages__col-reference"
						>
							<div
								class="field field--name-field-references field--type-entity-reference field--label-hidden field--items"
							>
								<div class="field--item" />
								<div class="field--item" />
								<div class="field--item" />
								<div class="field--item">
									<div
										data-history-node-id="1691"
										role="article"
										about="/fr/references/eram"
										class="highlighted-reference is-promoted block-single-part-one-third-small clearfix"
									>
										<div
											class="field field--name-field-logo field--type-entity-reference field--label-hidden field--item"
										>
											{' '}
											<img
												src={card.image}
												width="215"
												height="75"
												alt="Vignette"
												title="ERAM - logo"
												typeof="foaf:Image"
												class="img-responsive"
											/>
										</div>

										<div
											class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item"
										>
											{card.description}
										</div>
									</div>
								</div>
								<div class="field--item" />
								<div class="field--item" />
								<div class="field--item" />
								getGroup
								<div class="field--item" />
								<div class="field--item" />
							</div>
							<a class="block-content--preview-pages__col-link" href={card.url} rel="external">
								<span>{card.link}</span>
							</a>
						</div>
					{:else if card.type === 'news'}
						<div class="block-content--preview-pages__col block-content--preview-pages__col-news">
							<div
								data-history-node-id="2241"
								role="article"
								about="/fr/groupeactualites/palindromejs"
								class="news is-promoted block-single-part-one-third-small clearfix"
							>
								<h3 class="news-title">
									<span>{card.title}</span>
								</h3>

								<div class="content">
									<div
										class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item"
									>
										{card.description}
									</div>
								</div>
							</div>

							<a class="block-content--preview-pages__col-link" href={card.url} rel="external">
								<span>{card.link}</span>
							</a>
						</div>
					{:else if card.type === 'image'}
						<div
							style={`background-image: url(${card.image}); background-size: cover; background-repeat: no-repeat;`}
							class="block-content--preview-pages__col-picture"
						>
							<div class="block-content--preview-pages__news-picture">
								<div class="block-content--preview-pages__news-triangle" />
							</div>
						</div>
					{:else if card.type === 'technology'}
						<div
							style="background-image:url(https://www.smile.eu/sites/default/files/styles/preview_pages_pictures/public/2017-09/Drupal%20Copy_0.png?itok=CV-sCDWo);background-size: cover;background-repeat: no-repeat;"
							class="block-content--preview-pages__col block-content--preview-pages__col-technology"
						>
							<div
								class="field field--name-field-technologies field--type-entity-reference field--label-hidden field--items"
							>
								<div class="field--item">
									<div
										data-history-node-id="42"
										role="article"
										about="/fr/technologies/drupal"
										class="technology is-promoted block-single-part-one-third-small clearfix"
									>
										<h3 class="title-technology">
											<span>{card.title}</span>
										</h3>

										<div class="content">
											<div
												class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item"
											>
												{card.description}
											</div>
										</div>
									</div>
								</div>
								<div class="field--item" />
								<div class="field--item" />
								<div class="field--item" />
								<div class="field--item" />
							</div>

							<a class="block-content--preview-pages__col-link" href={card.url} rel="external">
								<span>{card.link}</span>
							</a>
						</div>
					{:else if card.type === 'event'}
						<div class="block-content--preview-pages__col block-content--preview-pages__col-event">
							<div
								data-history-node-id="2097"
								role="article"
								about="/fr/groupeevenements/quick-talk-tech-smile"
								class="event block-single-part-one-third-small clearfix"
							>
								<div
									class="field field--name-field-date field--type-datetime field--label-hidden field--item"
								>
									<div class="date-day">{card.day}</div>
									<div class="date-month">{card.month}</div>
								</div>

								<h3 class="title-event">
									<span>{card.title}</span>
								</h3>

								<div
									class="field field--name-field-place field--type-string field--label-hidden field--item"
								>
									{card.description}
								</div>
							</div>

							<a class="block-content--preview-pages__col-link" href={card.url} rel="external">
								<span>{card.link}</span>
							</a>
						</div>
					{:else if card.type === 'whitePaper'}
						<div
							class="block-content--preview-pages__col block-content--preview-pages__col-white-paper"
						>
							<div
								data-history-node-id="2260"
								role="article"
								about="/fr/livres-blancslivres-blancs/linux-rt"
								class="white-paper is-promoted block-single-part-one-third-small clearfix"
							>
								<h3 class="title-white-papers">
									<span>{card.title}</span>
								</h3>
							</div>

							<a class="block-content--preview-pages__col-link" href={card.url} rel="external">
								<span>{card.link}</span>
							</a>
						</div>
					{/if}
				{/each}
			</div>
		{/each}
	</section>
</div>
