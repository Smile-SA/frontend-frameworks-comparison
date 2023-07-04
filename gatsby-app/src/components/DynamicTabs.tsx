"use client";

import classNames from "classnames";
import React, { MouseEvent, useState } from "react";

export default function DynamicTabs() {
  const [solutionsTabIndex, setSolutionsTabIndex] = useState(0);

  function handleSolutionsTabIndex(event: MouseEvent, index: number) {
    event.preventDefault();
    setSolutionsTabIndex(index);
  }

  return (
    <div className="field--item">
      <div className="block-content block-content-expertises block">
        <h2 className="field--name-field-label">
          Découvrez nos solutions open source
        </h2>
        <div className="js-tabs ui-tabs ui-corner-all ui-widget ui-widget-content">
          <ul
            role="tablist"
            className="ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
          >
            <li
              role="tab"
              tabIndex={0}
              className={classNames(
                "ui-tabs-tab ui-corner-top ui-state-default ui-tab",
                {
                  "ui-tabs-active ui-state-active": solutionsTabIndex === 0,
                }
              )}
              aria-controls="tab-expertise-1"
              aria-labelledby="ui-id-1"
              aria-selected={solutionsTabIndex === 0 ? "true" : "false"}
              aria-expanded={solutionsTabIndex === 0 ? "true" : "false"}
              onClick={(e) => handleSolutionsTabIndex(e, 0)}
            >
              <h3>
                <a
                  href="#tab-expertise-1"
                  role="presentation"
                  tabIndex={-1}
                  className="ui-tabs-anchor"
                  id="ui-id-1"
                >
                  Offres
                </a>
              </h3>
            </li>
            <li
              role="tab"
              tabIndex={-1}
              className={classNames(
                "ui-tabs-tab ui-corner-top ui-state-default ui-tab",
                {
                  "ui-tabs-active ui-state-active": solutionsTabIndex === 1,
                }
              )}
              aria-controls="tab-expertise-2"
              aria-labelledby="ui-id-2"
              aria-selected={solutionsTabIndex === 1 ? "true" : "false"}
              aria-expanded={solutionsTabIndex === 1 ? "true" : "false"}
              onClick={(e) => handleSolutionsTabIndex(e, 1)}
            >
              <h3>
                <a
                  href="#tab-expertise-2"
                  role="presentation"
                  tabIndex={-1}
                  className="ui-tabs-anchor"
                  id="ui-id-2"
                >
                  Technologies
                </a>
              </h3>
            </li>
          </ul>

          <div
            id="tab-expertise-1"
            className="js-tab ui-tabs-panel ui-corner-bottom ui-widget-content"
            aria-labelledby="ui-id-1"
            role="tabpanel"
            aria-hidden={solutionsTabIndex === 0 ? "false" : "true"}
            style={solutionsTabIndex === 0 ? {} : { display: "none" }}
          >
            <div className="paragraph paragraph--type--expertise paragraph--view-mode--default">
              <div className="row">
                <div className="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    href="/fr/offres/digital"
                  >
                    <div className="expertise-item--header">
                      <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
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
                              className="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                        Digital
                      </div>
                    </div>

                    <div className="expertise-item--link">
                      <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                        Vous avez de grandes ambitions pour votre écosystème
                        digital ? Ça tombe bien ! Chez Smile, nous voyons les
                        choses en grand.{" "}
                      </div>
                    </div>
                  </a>
                </div>

                <div className="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    href="/fr/offres/business-apps"
                  >
                    <div className="expertise-item--header">
                      <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
                        <div>
                          <picture>
                            <source
                              srcSet="/sites/default/files/styles/expertise_item_mobile/public/2017-08/BA_1.png?itok=owtmLuUn 1x"
                              media="all and (max-width: 480px)"
                              type="image/png"
                            />
                            <img
                              src="https://www.smile.eu/sites/default/files/styles/expertise_item/public/2017-08/BA_1.png?itok=-YAV1P9c"
                              alt="image introuvable "
                              typeof="foaf:Image"
                              className="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                        Business Apps
                      </div>
                    </div>

                    <div className="expertise-item--link">
                      <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                        Vous avez des projets de transformation ? Super, on
                        adore ça ! Que vous soyez prêts ou pas ;) Nous vous
                        accompagnons de A à Z, de la conception à
                        l’accompagnement.
                      </div>
                    </div>
                  </a>
                </div>

                <div className="clearfix hidden-md hidden-lg hidden-xl"></div>
                <div className="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    href="/fr/offres/embarque-iot"
                  >
                    <div className="expertise-item--header">
                      <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
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
                              className="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                        Embedded &amp; IOT
                      </div>
                    </div>

                    <div className="expertise-item--link">
                      <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                        Vous souhaitez lancer des produits connectés parmi les
                        plus innovants ? Vous êtes au bon endroit ! Nous
                        imaginons, prototypons et concevons les objets
                        d’aujourd’hui et de demain.{" "}
                      </div>
                    </div>
                  </a>
                </div>

                <div className="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    href="/fr/offres/infrastructure"
                  >
                    <div className="expertise-item--header">
                      <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
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
                              className="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                        Infra
                      </div>
                    </div>

                    <div className="expertise-item--link">
                      <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                        Vous cherchez à industrialiser votre infrastructure ? À
                        tirer parti du Cloud pour gagner en agilité et faire des
                        économies ?
                      </div>
                    </div>
                  </a>
                </div>

                <div className="clearfix hidden-md hidden-lg hidden-xl"></div>
              </div>
            </div>
          </div>
          <div
            id="tab-expertise-2"
            className="js-tab ui-tabs-panel ui-corner-bottom ui-widget-content"
            aria-labelledby="ui-id-2"
            role="tabpanel"
            aria-hidden={solutionsTabIndex === 1 ? "false" : "true"}
            style={solutionsTabIndex === 1 ? {} : { display: "none" }}
          >
            <div className="paragraph paragraph--type--expertise paragraph--view-mode--default">
              <div className="row">
                <div className="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    href="/fr/livres-blancslivres-blancs/guide-drupal-8"
                  >
                    <div className="expertise-item--header">
                      <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
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
                              className="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                        Drupal
                      </div>
                    </div>

                    <div className="expertise-item--link">
                      <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                        Devinez qui est le 1er expert Français de Drupal ? Smile
                        !
                      </div>
                    </div>
                  </a>
                </div>

                <div className="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    href="/fr/technologies/jahia"
                  >
                    <div className="expertise-item--header">
                      <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
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
                              className="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                        Jahia
                      </div>
                    </div>

                    <div className="expertise-item--link">
                      <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                        Smile est aujourd’hui partenaire de Jahia, niveau
                        Platinum (le plus haut niveau) et a reçu le prix «Europe
                        Partner of the Year» !
                      </div>
                    </div>
                  </a>
                </div>

                <div className="clearfix hidden-md hidden-lg hidden-xl"></div>
                <div className="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    href="/technologies/magento"
                  >
                    <div className="expertise-item--header">
                      <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
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
                              className="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                        Magento
                      </div>
                    </div>

                    <div className="expertise-item--link">
                      <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                        Smile, premier expert européen de Magento, est aussi
                        partenaire Global Elite Magento - un statut accordé à
                        seulement 5 entreprises dans le monde !
                      </div>
                    </div>
                  </a>
                </div>

                <div className="field__item col-xs-12 col-sm-6 col-md-3">
                  <a
                    className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                    href="/fr/technologies/liferay"
                  >
                    <div className="expertise-item--header">
                      <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
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
                              className="img-responsive"
                            />
                          </picture>
                        </div>
                      </div>

                      <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                        Liferay
                      </div>
                    </div>

                    <div className="expertise-item--link">
                      <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                        Devinez qui est le premier partenaire Platinum de
                        Liferay en France ? Smile !
                      </div>
                    </div>
                  </a>
                </div>

                <div className="clearfix hidden-md hidden-lg hidden-xl"></div>
              </div>

              <div className="link-expertise">
                <div className="link-content">
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
  );
}
