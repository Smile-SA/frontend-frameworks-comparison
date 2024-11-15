import { Component, useState, xml } from "@odoo/owl";

export class DynamicTabs extends Component {
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
          <div class="row">
            <div class="field__item col-xs-12 col-sm-6 col-md-3">
              <a
                class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                href="/fr/offres/digital"
              >
                <div class="expertise-item--header">
                  <div
                    class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                  >
                    <div>
                      <picture>
                        <source
                          srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-08/DIGITAL_1.png?itok=cBv5EibO 1x"
                          media="all and (max-width: 480px)"
                          type="image/png"
                        />
                        <img
                          src="https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-08/DIGITAL_1.png?itok=4CXdbzM4"
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
                    Digital
                  </div>
                </div>

                <div class="expertise-item--link">
                  <div
                    class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                  >
                    Vous avez de grandes ambitions pour votre écosystème digital ? Ça tombe bien !
                    Chez Smile, nous voyons les choses en grand.
                  </div>
                </div>
              </a>
            </div>

            <div class="field__item col-xs-12 col-sm-6 col-md-3">
              <a
                class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                href="/fr/offres/business-apps"
              >
                <div class="expertise-item--header">
                  <div
                    class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                  >
                    <div>
                      <picture>
                        <source
                          srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-08/BA_1.png?itok=owtmLuUn 1x"
                          media="all and (max-width: 480px)"
                          type="image/png"
                        />
                        <img
                          src="https://www.smile.this.eu/sites/default/files/styles/expertise_item/public/2017-08/BA_1.png?itok=-YAV1P9c"
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
                    Business Apps
                  </div>
                </div>

                <div class="expertise-item--link">
                  <div
                    class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                  >
                    Vous avez des projets de transformation ? Super, on adore ça ! Que vous soyez
                    prêts ou pas ;) Nous vous accompagnons de A à Z, de la conception à
                    l’accompagnement.
                  </div>
                </div>
              </a>
            </div>

            <div class="clearfix hidden-md hidden-lg hidden-xl"></div>
            <div class="field__item col-xs-12 col-sm-6 col-md-3">
              <a
                class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                href="/fr/offres/embarque-iot"
              >
                <div class="expertise-item--header">
                  <div
                    class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                  >
                    <div>
                      <picture>
                        <source
                          srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-08/EM_0.png?itok=8gsfRthJ 1x"
                          media="all and (max-width: 480px)"
                          type="image/png"
                        />
                        <img
                          src="https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-08/EM_0.png?itok=5G7mbT3o"
                          alt="image introuvable"
                          typeof="foaf:Image"
                          class="img-responsive"
                        />
                      </picture>
                    </div>
                  </div>

                  <div
                    class="field field--name-field-label field--type-string field--label-hidden field--item"
                  >
                    Embedded &amp; IOT
                  </div>
                </div>

                <div class="expertise-item--link">
                  <div
                    class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                  >
                    Vous souhaitez lancer des produits connectés parmi les plus innovants ? Vous
                    êtes au bon endroit ! Nous imaginons, prototypons et concevons les objets
                    d’aujourd’hui et de demain.
                  </div>
                </div>
              </a>
            </div>

            <div class="field__item col-xs-12 col-sm-6 col-md-3">
              <a
                class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                href="/fr/offres/infrastructure"
              >
                <div class="expertise-item--header">
                  <div
                    class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                  >
                    <div>
                      <picture>
                        <source
                          srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-08/INFRA_1.png?itok=yk1PCdKI 1x"
                          media="all and (max-width: 480px)"
                          type="image/png"
                        />
                        <img
                          src="https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-08/INFRA_1.png?itok=A0SrMgg-"
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
                    Infra
                  </div>
                </div>

                <div class="expertise-item--link">
                  <div
                    class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                  >
                    Vous cherchez à industrialiser votre infrastructure ? À tirer parti du Cloud
                    pour gagner en agilité et faire des économies ?
                  </div>
                </div>
              </a>
            </div>

            <div class="clearfix hidden-md hidden-lg hidden-xl"></div>
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
          <div class="row">
            <div class="field__item col-xs-12 col-sm-6 col-md-3">
              <a
                class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                href="/fr/livres-blancslivres-blancs/guide-drupal-8"
              >
                <div class="expertise-item--header">
                  <div
                    class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                  >
                    <div>
                      <picture>
                        <source
                          srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-09/Drupal%20Copy.png?itok=ODF4d7qI 1x"
                          media="all and (max-width: 480px)"
                          type="image/png"
                        />
                        <img
                          src="https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-09/Drupal%20Copy.png?itok=PFW89xHs"
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
                    Drupal
                  </div>
                </div>

                <div class="expertise-item--link">
                  <div
                    class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                  >
                    Devinez qui est le 1er expert Français de Drupal ? Smile !
                  </div>
                </div>
              </a>
            </div>

            <div class="field__item col-xs-12 col-sm-6 col-md-3">
              <a
                class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                href="/fr/technologies/jahia"
              >
                <div class="expertise-item--header">
                  <div
                    class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                  >
                    <div>
                      <picture>
                        <source
                          srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-09/Jahai_2.png?itok=_xTjwFLT 1x"
                          media="all and (max-width: 480px)"
                          type="image/png"
                        />
                        <img
                          src="https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-09/Jahai_2.png?itok=GTrBwm3k"
                          alt="Jahia - visuel home"
                          typeof="foaf:Image"
                          class="img-responsive"
                        />
                      </picture>
                    </div>
                  </div>

                  <div
                    class="field field--name-field-label field--type-string field--label-hidden field--item"
                  >
                    Jahia
                  </div>
                </div>

                <div class="expertise-item--link">
                  <div
                    class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                  >
                    Smile est aujourd’hui partenaire de Jahia, niveau Platinum (le plus haut
                    niveau) et a reçu le prix «Europe Partner of the Year» !
                  </div>
                </div>
              </a>
            </div>

            <div class="clearfix hidden-md hidden-lg hidden-xl"></div>
            <div class="field__item col-xs-12 col-sm-6 col-md-3">
              <a
                class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                href="/technologies/magento"
              >
                <div class="expertise-item--header">
                  <div
                    class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                  >
                    <div>
                      <picture>
                        <source
                          srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-09/Magento%20Copy.png?itok=lFXtOokc 1x"
                          media="all and (max-width: 480px)"
                          type="image/png"
                        />
                        <img
                          src="https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-09/Magento%20Copy.png?itok=cVhTCR1i"
                          alt="Magento - visuel Home"
                          typeof="foaf:Image"
                          class="img-responsive"
                        />
                      </picture>
                    </div>
                  </div>

                  <div
                    class="field field--name-field-label field--type-string field--label-hidden field--item"
                  >
                    Magento
                  </div>
                </div>

                <div class="expertise-item--link">
                  <div
                    class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                  >
                    Smile, premier expert européen de Magento, est aussi partenaire Global Elite
                    Magento - un statut accordé à seulement 5 entreprises dans le monde !
                  </div>
                </div>
              </a>
            </div>

            <div class="field__item col-xs-12 col-sm-6 col-md-3">
              <a
                class="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                href="/fr/technologies/liferay"
              >
                <div class="expertise-item--header">
                  <div
                    class="field field--name-field-image field--type-entity-reference field--label-hidden field--item"
                  >
                    <div>
                      <picture>
                        <source
                          srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-09/Liferay%20Copy_1.png?itok=ETwF-A93 1x"
                          media="all and (max-width: 480px)"
                          type="image/png"
                        />
                        <img
                          src="https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-09/Liferay%20Copy_1.png?itok=cNLKMYiR"
                          alt="Liferay - visuel home"
                          typeof="foaf:Image"
                          class="img-responsive"
                        />
                      </picture>
                    </div>
                  </div>

                  <div
                    class="field field--name-field-label field--type-string field--label-hidden field--item"
                  >
                    Liferay
                  </div>
                </div>

                <div class="expertise-item--link">
                  <div
                    class="field field--name-field-description field--type-string-long field--label-hidden field--item"
                  >
                    Devinez qui est le premier partenaire Platinum de Liferay en France ? Smile !
                  </div>
                </div>
              </a>
            </div>

            <div class="clearfix hidden-md hidden-lg hidden-xl"></div>
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
  state = useState({ solutionsTabIndex: 0 });
  handleSolutionsTabIndex(e: MouseEvent, index: number) {
    e.preventDefault();
    this.state.solutionsTabIndex = index;
  }
}
