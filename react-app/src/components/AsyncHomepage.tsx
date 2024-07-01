import { MouseEvent } from "react";

import AsyncCards from "./AsyncCards";
import AsyncMap from "./AsyncMap";
import AsyncOpenSource from "./AsyncOpenSource";
import AsyncTabs from "./AsyncTabs";

interface IAsyncHomepageProps {
  count?: number;
  onStart?: () => void;
}

export default function AsyncHomepage(props: IAsyncHomepageProps) {
  const { count = 2000, onStart } = props;

  function handleStart(event: MouseEvent) {
    event.preventDefault();
    onStart?.();
  }

  return (
    <section className="col-sm-12">
      <a id="main-content"></a>
      <div className="region region-content-top">
        <div data-drupal-messages-fallback="" className="hidden"></div>
      </div>

      <div className="region region-content">
        <article
          data-history-node-id="4"
          role="article"
          about="/fr/homepage"
          typeof="schema:WebPage"
          className="page full clearfix"
        >
          <div className="content">
            <div className="field--item">
              <div className="full-new-homepage">
                <div className="block-header-block homepage-yellow">
                  <div className="logo-block-hp">
                    <a href="#">
                      <img
                        className="block-content-block_header_block__btn-logo-smile"
                        src="http://localhost:3333/icons/logo_yellow.png"
                      />
                    </a>
                  </div>
                  <div className="container">
                    <div className="field field--name-field-header-text-paragraph field--type-entity-reference-revisions field--label-hidden field--item">
                      <div className="block-content-block_header_block__paragraph new-header-homepage">
                        <div className="text-new-header">
                          <p>CRÉATEUR D&apos;EXPÉRIENCE DIGITALE OUVERTE</p>
                        </div>
                        <div className="link-single-part">
                          <div className="link-content">
                            <a href="/fr/nos-references" className="btn blue">
                              Découvrez nos projets
                            </a>
                          </div>
                        </div>
                        <h1 className="tag-new-header"> #MadeWithSmile</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <AsyncOpenSource />
            <AsyncCards />
            <div className="field--item">
              <div className="block-content block-content-map">
                <div className="map--kpi">
                  <div className="field field--name-field-map-kpi field--type-entity-reference field--label-hidden field--items">
                    <div className="field--item">
                      <div className="block-content block-content-kpi singleblock-text">
                        <div className="title"> 17</div>
                        <div className="subtitle"> Agences</div>
                      </div>
                    </div>
                    <div className="field--item">
                      <div className="block-content block-content-kpi singleblock-text">
                        <div className="title"> 9</div>
                        <div className="subtitle"> PAYS</div>
                      </div>
                    </div>
                    <div className="field--item">
                      <div className="block-content block-content-kpi singleblock-text">
                        <div className="title"> {count}</div>
                        <div className="subtitle"> SMILIENS</div>
                      </div>
                    </div>
                  </div>
                  <div className="link-map">
                    <div className="link-map-content">
                      <button
                        type="button"
                        onClick={handleStart}
                        style={{ border: 0, background: "transparent" }}
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
  );
}
