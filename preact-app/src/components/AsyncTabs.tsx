"use client";

import classNames from "classnames";
import { Fragment } from "preact";
import { useEffect, useState } from "preact/hooks";

export interface ISolution {
  title: string;
  description: string;
  url: string;
  image: string;
  mobileImage: string;
}

export default function AsyncTabs() {
  const [solutionsTabIndex, setSolutionsTabIndex] = useState(0);

  function handleSolutionsTabIndex(event: MouseEvent, index: number) {
    event.preventDefault();
    setSolutionsTabIndex(index);
  }

  const [solutions, setSolutions] = useState<ISolution[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/solutions")
      .then((r) => r.json())
      .then((json) => setSolutions(json));
  }, []);

  const [technologies, setTechnologies] = useState<ISolution[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/technologies")
      .then((r) => r.json())
      .then((json) => setTechnologies(json));
  }, []);

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
                {solutions.map((item, i) => (
                  <Fragment key={i}>
                    <div className="field__item col-xs-12 col-sm-6 col-md-3">
                      <a
                        className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                        href={item.url}
                      >
                        <div className="expertise-item--header">
                          <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
                            <div>
                              <picture>
                                <source
                                  srcSet={item.mobileImage}
                                  media="all and (max-width: 480px)"
                                  type="image/png"
                                />
                                <img
                                  src={item.image}
                                  alt="image introuvable "
                                  typeof="foaf:Image"
                                  className="img-responsive"
                                />
                              </picture>
                            </div>
                          </div>

                          <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                            {item.title}
                          </div>
                        </div>

                        <div className="expertise-item--link">
                          <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                            {item.description}
                          </div>
                        </div>
                      </a>
                    </div>
                    {i % 2 === 1 && (
                      <div className="clearfix hidden-md hidden-lg hidden-xl"></div>
                    )}
                  </Fragment>
                ))}
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
                {technologies.map((item, i) => (
                  <Fragment key={i}>
                    <div className="field__item col-xs-12 col-sm-6 col-md-3">
                      <a
                        className="paragraph paragraph--type--expertise-item paragraph--view-mode--default"
                        href={item.url}
                      >
                        <div className="expertise-item--header">
                          <div className="field field--name-field-image field--type-entity-reference field--label-hidden field--item">
                            <div>
                              <picture>
                                <source
                                  srcSet={item.mobileImage}
                                  media="all and (max-width: 480px)"
                                  type="image/png"
                                />
                                <img
                                  src={item.image}
                                  alt="image introuvable "
                                  typeof="foaf:Image"
                                  className="img-responsive"
                                />
                              </picture>
                            </div>
                          </div>

                          <div className="field field--name-field-label field--type-string field--label-hidden field--item">
                            {item.title}
                          </div>
                        </div>

                        <div className="expertise-item--link">
                          <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                            {item.description}
                          </div>
                        </div>
                      </a>
                    </div>
                    {i % 2 === 1 && (
                      <div className="clearfix hidden-md hidden-lg hidden-xl"></div>
                    )}
                  </Fragment>
                ))}
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
