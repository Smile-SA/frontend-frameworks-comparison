import { useEffect, useState } from "preact/hooks";

export interface IOpenSource {
  title: string;
  description: string;
  link: string;
  url: string;
}

export default function AsyncOpenSource() {
  const [openSources, setOpenSources] = useState<IOpenSource[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/opensource")
      .then((r) => r.json())
      .then((json) => setOpenSources(json));
  }, []);

  return (
    <div className="field--item">
      <div className="block-content block-content-two_parts big onepartright margin block-twoparts">
        {openSources[0] && (
          <div
            className="single-block white"
            style={{
              backgroundColor: "#ffffff",
              backgroundImage:
                "url('https://www.smile.eu/sites/default/files/2017-09/background%20HP.jpg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="singleblock-text  ">
              <h2 className="node-title">{openSources[0].title}</h2>
              <div className="field--name-field-description">
                <div className="field field--name-field-description field--type-string-long field--label-hidden field--item">
                  {openSources[0].description}
                </div>
              </div>
            </div>
            <div className="link-single-part">
              <div className="link-content">
                <a href={openSources[0].url}>{openSources[0].link}</a>
              </div>
            </div>
          </div>
        )}

        {openSources[1] && (
          <div
            className="single-block white_paper block_single_part_one_third_tall blue"
            style={{
              backgroundColor: "#FFFFFF",
              backgroundImage:
                "url('https://www.smile.eu/sites/default/files/2017-09/bg_gris.png')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            <div className="singleblock-text white_paper block_single_part_one_third_tall">
              <div
                data-history-node-id="178"
                role="article"
                about="/fr/livres-blancslivres-blancs/guide-lopen-source"
                className="white-paper is-promoted block-single-part-one-third-tall clearfix"
              >
                <div className="field field--name-field-preview field--type-entity-reference field--label-hidden field--item">
                  {" "}
                  <img
                    src="https://www.smile.eu/sites/default/files/styles/white_papers_preview_single_part/public/2017-09/LB_guide_OS_0.png?itok=wmfqmAeA"
                    width="141"
                    height="209"
                    alt="Vignette"
                    title="Guide de l’open source - couverture"
                    typeof="foaf:Image"
                    className="img-responsive"
                  />
                </div>

                <div className="title-white-papers">
                  <h2>{openSources[1].title}</h2>
                </div>

                <div className="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                  {openSources[1].description}
                </div>
              </div>

              <div className="field--name-field-description"></div>
            </div>
            <div className="link-single-part">
              <div className="link-content">
                <a href={openSources[1].url}>{openSources[1].link}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
