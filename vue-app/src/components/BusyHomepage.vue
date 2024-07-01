<script setup lang="ts">
import AsyncCards from './AsyncCards.vue'
import AsyncOpenSource from './AsyncOpenSource.vue'
import AsyncMap from './DynamicMap.vue'
import AsyncTabs from './AsyncTabs.vue'

defineProps<{
  onStart?: () => void
}>()

let start = performance.now()
for (let i = 0; i < 100_000; i++) {
  for (let j = 0; j < 100_000; j++) {
    if (i % 2 === 0) {
      start += j
    } else {
      start -= j
    }
  }
}
const diff = Math.round(performance.now() - start)
</script>
<template>
  <section class="col-sm-12">
    <a id="main-content"></a>
    <div class="region region-content-top">
      <div data-drupal-messages-fallback="" class="hidden"></div>
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
                  <a href="#">
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
                          <a href="/fr/nos-references" class="btn blue"> Découvrez nos projets </a>
                        </div>
                      </div>
                      <h1 class="tag-new-header">#MadeWithSmile</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AsyncOpenSource />
          <AsyncCards />
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
                      <div class="title">{{ diff }}</div>
                      <div class="subtitle">SMILIENS</div>
                    </div>
                  </div>
                </div>
                <div class="link-map">
                  <div class="link-map-content">
                    <button
                      type="button"
                      @click.prevent="onStart"
                      :style="{ border: 0, background: 'transparent' }"
                    >
                      Découvrez smile
                    </button>
                  </div>
                </div>
              </div>
              <AsyncMap />
            </div>
          </div>
          <AsyncTabs />
        </div>
      </article>
    </div>
  </section>
</template>
