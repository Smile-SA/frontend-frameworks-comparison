import { Component, createResource } from "solid-js";

export interface IOpenSource {
  title: string;
  description: string;
  link: string;
  url: string;
}

function fetchOpenSources() {
  return fetch("http://localhost:3333/opensource").then((r) => r.json());
}

const AsyncOpenSources: Component = () => {
  const [openSources] = createResource<IOpenSource[]>(fetchOpenSources);
  const first = () => openSources()?.[0];
  const second = () => openSources()?.[1];

  return (
    <div class="field--item">
      <div class="block-content block-content-two_parts big onepartright margin block-twoparts">
        {first() && (
          <div
            class="single-block white"
            style="background-color: #ffffff; background-image: url('https://www.smile.eu/sites/default/files/2017-09/background%20HP.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center center;"
          >
            <div class="singleblock-text">
              <h2 class="node-title">{first()?.title}</h2>
              <div class="field--name-field-description">
                <div class="field field--name-field-description field--type-string-long field--label-hidden field--item">
                  {first()?.description}
                </div>
              </div>
            </div>
            <div class="link-single-part">
              <div class="link-content">
                <a href={first()?.url} rel="external">
                  {first()?.link}
                </a>
              </div>
            </div>
          </div>
        )}

        {second() && (
          <div
            class="single-block white_paper block_single_part_one_third_tall blue"
            style="background-color: #FFFFFF; background-image: url('https://www.smile.eu/sites/default/files/2017-09/bg_gris.png'); background-size: cover; background-repeat: no-repeat; background-position: center center;"
          >
            <div class="singleblock-text white_paper block_single_part_one_third_tall">
              <div
                data-history-node-id="178"
                role="article"
                about="/fr/livres-blancslivres-blancs/guide-lopen-source"
                class="white-paper is-promoted block-single-part-one-third-tall clearfix"
              >
                <div class="field field--name-field-preview field--type-entity-reference field--label-hidden field--item">
                  {" "}
                  <img
                    src="https://www.smile.eu/sites/default/files/styles/white_papers_preview_single_part/public/2017-09/LB_guide_OS_0.png?itok=wmfqmAeA"
                    width="141"
                    height="209"
                    alt="Vignette"
                    title="Guide de l’open source - couverture"
                    typeof="foaf:Image"
                    class="img-responsive"
                  />
                </div>

                <div class="title-white-papers">
                  <h2>{second()?.title}</h2>
                </div>

                <div class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                  {second()?.description}
                </div>
              </div>

              <div class="field--name-field-description" />
            </div>
            <div class="link-single-part">
              <div class="link-content">
                <a href={second()?.url} rel="external">
                  {second()?.link}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AsyncOpenSources;
