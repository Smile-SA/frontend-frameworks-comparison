import { Component, For, createResource, createSignal } from "solid-js";

export interface ISolution {
  title: string;
  description: string;
  url: string;
  image: string;
  mobileImage: string;
}

function fetchSolutions() {
  return fetch("http://localhost:3333/solutions").then((r) => r.json());
}

function fetchTechnologies() {
  return fetch("http://localhost:3333/technologies").then((r) => r.json());
}

const AsyncTabs: Component = () => {
  const [solutionsTabIndex, setSolutionsTabIndex] = createSignal(0);
  const [solutions] = createResource<ISolution[]>(fetchSolutions);
  const [technologies] = createResource<ISolution[]>(fetchTechnologies);

  function handleSolutionsTabIndex(index: number, event: MouseEvent) {
    event.preventDefault();
    setSolutionsTabIndex(index);
  }

  return (
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
              tabindex={0}
              class="ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active"
              aria-controls="tab-expertise-1"
              aria-labelledby="ui-id-1"
              classList={{
                "ui-tabs-active ui-state-active": solutionsTabIndex() === 0,
              }}
              aria-selected={solutionsTabIndex() === 0 ? "true" : "false"}
              aria-expanded={solutionsTabIndex() === 0 ? "true" : "false"}
              onClick={[handleSolutionsTabIndex, 0]}
            >
              <h3>
                <a
                  href="#tab-expertise-1"
                  role="presentation"
                  tabindex={-1}
                  class="ui-tabs-anchor"
                  id="ui-id-1"
                  rel="external"
                >
                  Offres
                </a>
              </h3>
            </li>
            <li
              role="tab"
              tabindex={-1}
              class="ui-tabs-tab ui-corner-top ui-state-default ui-tab"
              aria-controls="tab-expertise-2"
              aria-labelledby="ui-id-2"
              classList={{
                "ui-tabs-active ui-state-active": solutionsTabIndex() === 1,
              }}
              aria-selected={solutionsTabIndex() === 1 ? "true" : "false"}
              aria-expanded={solutionsTabIndex() === 1 ? "true" : "false"}
              onClick={[handleSolutionsTabIndex, 1]}
            >
              <h3>
                <a
                  href="#tab-expertise-2"
                  role="presentation"
                  tabindex={-1}
                  class="ui-tabs-anchor"
                  id="ui-id-2"
                  rel="external"
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
            aria-hidden={solutionsTabIndex() === 0 ? "false" : "true"}
            style={solutionsTabIndex() === 0 ? {} : { display: "none" }}
          >
            <div class="paragraph paragraph--type--expertise paragraph--view-mode--default">
              <div class="row">
                <For each={solutions()}>
                  {(item, i) => (
                    <>
                      <div class="field__item col-xs-12 col-sm-6 col-md-3">
                        <a
                          class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                          href={item.url}
                        >
                          <div class="expertise-item--header">
                            <div class="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
                              <div>
                                <picture>
                                  <source
                                    src-set={item.mobileImage}
                                    media="all and (max-width: 480px)"
                                    type="image/png"
                                  />
                                  <img
                                    src={item.image}
                                    alt="image introuvable "
                                    typeof="foaf:Image"
                                    class="img-responsive"
                                  />
                                </picture>
                              </div>
                            </div>

                            <div class="field field--name-field-label field--type-string field--label-hidden field--item">
                              {item.title}
                            </div>
                          </div>

                          <div class="expertise-item--link">
                            <div class="field field--name-field-description field--type-string-long field--label-hidden field--item">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      </div>
                      {i() % 2 === 1 && (
                        <div class="clearfix hidden-md hidden-lg hidden-xl"></div>
                      )}
                    </>
                  )}
                </For>
              </div>
            </div>
          </div>
          <div
            id="tab-expertise-2"
            class="js-tab ui-tabs-panel ui-corner-bottom ui-widget-content"
            aria-labelledby="ui-id-2"
            role="tabpanel"
            aria-hidden={solutionsTabIndex() === 1 ? "false" : "true"}
            style={solutionsTabIndex() === 1 ? {} : { display: "none" }}
          >
            <div class="paragraph paragraph--type--expertise paragraph--view-mode--default">
              <div class="row">
                <For each={technologies()}>
                  {(item, i) => (
                    <>
                      <div class="field__item col-xs-12 col-sm-6 col-md-3">
                        <a
                          class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                          href={item.url}
                        >
                          <div class="expertise-item--header">
                            <div class="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
                              <div>
                                <picture>
                                  <source
                                    src-set={item.mobileImage}
                                    media="all and (max-width: 480px)"
                                    type="image/png"
                                  />
                                  <img
                                    src={item.image}
                                    alt="image introuvable "
                                    typeof="foaf:Image"
                                    class="img-responsive"
                                  />
                                </picture>
                              </div>
                            </div>

                            <div class="field field--name-field-label field--type-string field--label-hidden field--item">
                              {item.title}
                            </div>
                          </div>

                          <div class="expertise-item--link">
                            <div class="field field--name-field-description field--type-string-long field--label-hidden field--item">
                              {item.description}
                            </div>
                          </div>
                        </a>
                      </div>
                      {i() % 2 === 1 && (
                        <div class="clearfix hidden-md hidden-lg hidden-xl"></div>
                      )}
                    </>
                  )}
                </For>
              </div>

              <div class="link-expertise">
                <div class="link-content">
                  <a href="/fr/technologies" rel="external">
                    Découvrez toutes les technologies maîtrisées
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsyncTabs;
