import { Component, onMounted, useState, xml } from "@odoo/owl";

export class AsyncTabs extends Component {
  static template = xml`<div class="field--item">
  <div class="block-content block-content-expertises block">
    <h2 class="field--name-field-label">Découvrez nos solutions open source</h2>
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
          t-att-class="{'ui-tabs-active ui-state-active': state.solutionsTabIndex === 0}"
          t-att-aria-selected="state.solutionsTabIndex === 0 ? 'true' : 'false'"
          t-att-aria-expanded="state.solutionsTabIndex === 0 ? 'true' : 'false'"
          t-on-click="e => this.handleSolutionsTabIndex(e, 0)"
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
          t-att-class="{'ui-tabs-active ui-state-active': state.solutionsTabIndex === 1}"
          t-att-aria-selected="state.solutionsTabIndex === 1 ? 'true' : 'false'"
          t-att-aria-expanded="state.solutionsTabIndex === 1 ? 'true' : 'false'"
          t-on-click="e => this.handleSolutionsTabIndex(e, 1)"
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
        t-att-aria-hidden="state.solutionsTabIndex === 0 ? 'false' : 'true'"
        t-attf-style="{{state.solutionsTabIndex === 0 ? '' : 'display: none;'}}"
      >
        <div class="paragraph paragraph--type--expertise paragraph--view-mode--default">
          <div t-if="state.solutions" class="row">
            <t t-foreach="state.solutions" t-as="item" t-key="$as_index">
              <div class="field__item col-xs-12 col-sm-6 col-md-3">
                <a
                  class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                  t-att-href="item.url"
                >
                  <div class="expertise-item--header">
                    <div
                      class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                    >
                      <div>
                        <picture>
                          <source
                            t-att-srcSet="item.mobileImage"
                            media="all and (max-width: 480px)"
                            type="image/png"
                          />
                          <img
                            t-att-src="item.image"
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
                      <t t-esc="item.title"/>
                    </div>
                  </div>

                  <div class="expertise-item--link">
                    <div
                      class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                    >
                      <t t-esc="item.description"/>
                    </div>
                  </div>
                </a>
              </div>
              <div t-if="$as_index % 2 === 1" class="clearfix hidden-md hidden-lg hidden-xl"></div>
            </t>
          </div>
        </div>
      </div>
      <div
        id="tab-expertise-2"
        class="js-tab ui-tabs-panel ui-corner-bottom ui-widget-content"
        aria-labelledby="ui-id-2"
        role="tabpanel"
        t-att-aria-hidden="state.solutionsTabIndex === 1 ? 'false' : 'true'"
        t-attf-style="{{state.solutionsTabIndex === 1 ? '' : 'display: none;'}}"
      >
        <div class="paragraph paragraph--type--expertise paragraph--view-mode--default">
          <div t-if="state.technologies" class="row">
            <t t-foreach="state.technologies" t-as="item" t-key="$as_index">
              <div class="field__item col-xs-12 col-sm-6 col-md-3">
                <a
                  class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                  t-att-href="item.url"
                >
                  <div class="expertise-item--header">
                    <div
                      class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                    >
                      <div>
                        <picture>
                          <source
                            t-att-srcSet="item.mobileImage"
                            media="all and (max-width: 480px)"
                            type="image/png"
                          />
                          <img
                            t-att-src="item.image"
                            alt="Drupal - visuel"
                            typeof="foaf:Image"
                            class="img-responsive"
                          />
                        </picture>
                      </div>
                    </div>

                    <div
                      class="field field--name-field-label field--type-string field--label-hidden field--item"
                    >
                      <t t-esc="item.title"/>
                    </div>
                  </div>

                  <div class="expertise-item--link">
                    <div
                      class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                    >
                      <t t-esc="item.description"/>
                    </div>
                  </div>
                </a>
              </div>
              <div t-if="$as_index % 2 === 1" class="clearfix hidden-md hidden-lg hidden-xl"></div>
            </t>
          </div>

          <div class="link-expertise">
            <div class="link-content">
              <a href="/fr/technologies"> Découvrez toutes les technologies maîtrisées </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  state = useState({ solutions: [], solutionsTabIndex: 0, technologies: [] });
  handleSolutionsTabIndex(e: MouseEvent, index: number) {
    e.preventDefault();
    this.state.solutionsTabIndex = index;
  }
  setup(): void {
    onMounted(() => {
      fetch("http://localhost:3333/solutions")
        .then((r) => r.json())
        .then((json) => (this.state.solutions = json));
      fetch("http://localhost:3333/technologies")
        .then((r) => r.json())
        .then((json) => (this.state.technologies = json));
    });
  }
}

export interface ISolution {
  title: string;
  description: string;
  url: string;
  image: string;
  mobileImage: string;
}
