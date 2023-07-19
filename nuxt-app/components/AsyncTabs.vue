<script setup lang="ts">
import { ref } from "vue";

export interface ISolution {
  title: string;
  description: string;
  url: string;
  image: string;
  mobileImage: string;
}

const { data } = await useAsyncData("tabs", () =>
  Promise.all([
    $fetch<ISolution[]>("http://localhost:3333/solutions"),
    $fetch<ISolution[]>("http://localhost:3333/technologies"),
  ])
);

const solutionsTabIndex = ref(0);

function handleSolutionsTabIndex(index: number) {
  solutionsTabIndex.value = index;
}
</script>
<template>
  <div class="field--item">
    <div class="block-content block-content-expertises block">
      <h2 class="field--name-field-label">
        Découvrez nos solutions open source
      </h2>
      <div class="js-tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
        <ul
          role="tablist"
          class="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
        >
          <li
            role="tab"
            tab-index="0"
            class="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active"
            aria-controls="tab-expertise-1"
            aria-labelledby="ui-id-1"
            :class="{
              'ui-tabs-active ui-state-active': solutionsTabIndex === 0,
            }"
            :aria-selected="solutionsTabIndex === 0 ? 'true' : 'false'"
            :aria-expanded="solutionsTabIndex === 0 ? 'true' : 'false'"
            @click.prevent="handleSolutionsTabIndex(0)"
          >
            <h3>
              <a
                href="#tab-expertise-1"
                role="presentation"
                tab-index="-1"
                class="ui-tabs-anchor"
                id="ui-id-1"
              >
                Offres
              </a>
            </h3>
          </li>
          <li
            role="tab"
            tab-index="-1"
            class="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
            aria-controls="tab-expertise-2"
            aria-labelledby="ui-id-2"
            :class="{
              'ui-tabs-active ui-state-active': solutionsTabIndex === 1,
            }"
            :aria-selected="solutionsTabIndex === 1 ? 'true' : 'false'"
            :aria-expanded="solutionsTabIndex === 1 ? 'true' : 'false'"
            @click.prevent="handleSolutionsTabIndex(1)"
          >
            <h3>
              <a
                href="#tab-expertise-2"
                role="presentation"
                tab-index="-1"
                class="ui-tabs-anchor"
                id="ui-id-2"
              >
                Technologies
              </a>
            </h3>
          </li>
        </ul>

        <div
          id="tab-expertise-1"
          class="js-tab ui-tabs-panel ui-corner-bottom ui-widget-content"
          aria-labelledby="ui-id-1"
          role="tabpanel"
          :aria-hidden="solutionsTabIndex === 0 ? 'false' : 'true'"
          :style="solutionsTabIndex === 0 ? {} : { display: 'none' }"
        >
          <div
            class="paragraph paragraph--type--expertise paragraph--view-mode--default"
          >
            <div v-if="data" class="row">
              <template v-for="(item, i) of data[0]">
                <div class="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    :href="item.url"
                  >
                    <div class="expertise-item--header">
                      <div
                        class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                      >
                        <div>
                          <picture>
                            <source
                              :src-set="item.mobileImage"
                              media="all and (max-width: 480px)"
                              type="image/png"
                            />
                            <img
                              :src="item.image"
                              alt="image introuvable "
                              typeof="foaf:Image"
                              class="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div
                        class="field field--name-field-label field--type-string field--label-hidden field--item"
                      >
                        {{ item.title }}
                      </div>
                    </div>

                    <div class="expertise-item--link">
                      <div
                        class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                      >
                        {{ item.description }}
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  v-if="i % 2 === 1"
                  class="clearfix hidden-md hidden-lg hidden-xl"
                ></div>
              </template>
            </div>
          </div>
        </div>
        <div
          id="tab-expertise-2"
          class="js-tab ui-tabs-panel ui-corner-bottom ui-widget-content"
          aria-labelledby="ui-id-2"
          role="tabpanel"
          :aria-hidden="solutionsTabIndex === 1 ? 'false' : 'true'"
          :style="solutionsTabIndex === 1 ? {} : { display: 'none' }"
        >
          <div
            class="paragraph paragraph--type--expertise paragraph--view-mode--default"
          >
            <div v-if="data" class="row">
              <template v-for="(item, i) of data[1]">
                <div class="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    :href="item.url"
                  >
                    <div class="expertise-item--header">
                      <div
                        class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                      >
                        <div>
                          <picture>
                            <source
                              :src-set="item.mobileImage"
                              media="all and (max-width: 480px)"
                              type="image/png"
                            />
                            <img
                              :src="item.image"
                              alt="image introuvable "
                              typeof="foaf:Image"
                              class="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div
                        class="field field--name-field-label field--type-string field--label-hidden field--item"
                      >
                        {{ item.title }}
                      </div>
                    </div>

                    <div class="expertise-item--link">
                      <div
                        class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                      >
                        {{ item.description }}
                      </div>
                    </div>
                  </a>
                </div>
                <div
                  v-if="i % 2 === 1"
                  class="clearfix hidden-md hidden-lg hidden-xl"
                ></div>
              </template>
            </div>

            <div class="link-expertise">
              <div class="link-content">
                <a href="/fr/technologies">
                  Découvrez toutes les technologies maîtrisées
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
