import { useEffect, useState } from "react";

interface IReference {
  type: "reference";
  image: string;
  description: string;
  link: string;
  url: string;
}

interface INews {
  type: "news";
  title: string;
  description: string;
  link: string;
  url: string;
}

interface IImage {
  type: "image";
  image: string;
}

interface ITechnology {
  type: "technology";
  title: string;
  description: string;
  link: string;
  url: string;
}

interface IEvent {
  type: "event";
  day: string;
  month: string;
  title: string;
  description: string;
  link: string;
  url: string;
}

interface IWhitePaper {
  type: "whitePaper";
  title: string;
  link: string;
  url: string;
}

export type ICard =
  | IReference
  | INews
  | IImage
  | ITechnology
  | IEvent
  | IWhitePaper;

function getGroup(card: ICard, i: number) {
  switch (card.type) {
    case "reference":
      return (
        <div
          className="block-content--preview-pages__col block-content--preview-pages__col-reference"
          key={i}
        >
          <div className="field field--name-field-references field--type-entity-reference field--label-hidden field--items">
            <div className="field--item"></div>
            <div className="field--item"></div>
            <div className="field--item"></div>
            <div className="field--item">
              <div
                data-history-node-id="1691"
                role="article"
                about="/fr/references/eram"
                className="highlighted-reference is-promoted block-single-part-one-third-small clearfix"
              >
                <div className="field field--name-field-logo field--type-entity-reference field--label-hidden field--item">
                  {" "}
                  <img
                    src={card.image}
                    width="215"
                    height="75"
                    alt="Vignette"
                    title="ERAM - logo"
                    typeof="foaf:Image"
                    className="img-responsive"
                  />
                </div>

                <div className="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                  {card.description}
                </div>
              </div>
            </div>
            <div className="field--item"></div>
            <div className="field--item"></div>
            <div className="field--item"></div>
            getGroup <div className="field--item"></div>
            <div className="field--item"></div>
          </div>
          <a className="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );

    case "news":
      return (
        <div
          className="block-content--preview-pages__col block-content--preview-pages__col-news"
          key={i}
        >
          <div
            data-history-node-id="2241"
            role="article"
            about="/fr/groupeactualites/palindromejs"
            className="news is-promoted block-single-part-one-third-small clearfix"
          >
            <h3 className="news-title">
              <span>{card.title}</span>
            </h3>

            <div className="content">
              <div className="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                {card.description}
              </div>
            </div>
          </div>

          <a className="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );

    case "image":
      return (
        <div
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="block-content--preview-pages__col-picture"
          key={i}
        >
          <div className="block-content--preview-pages__news-picture">
            <div className="block-content--preview-pages__news-triangle"></div>
          </div>
        </div>
      );

    case "technology":
      return (
        <div
          style={{
            backgroundImage:
              "url(http://www.smile.eu/sites/default/files/styles/preview_pages_pictures/public/2017-09/Drupal%20Copy_0.png?itok=CV-sCDWo)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="block-content--preview-pages__col block-content--preview-pages__col-technology"
          key={i}
        >
          <div className="field field--name-field-technologies field--type-entity-reference field--label-hidden field--items">
            <div className="field--item">
              <div
                data-history-node-id="42"
                role="article"
                about="/fr/technologies/drupal"
                className="technology is-promoted block-single-part-one-third-small clearfix"
              >
                <h3 className="title-technology">
                  <span>{card.title}</span>
                </h3>

                <div className="content">
                  <div className="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                    {card.description}
                  </div>
                </div>
              </div>
            </div>
            <div className="field--item"></div>
            <div className="field--item"></div>
            <div className="field--item"></div>
            <div className="field--item"></div>
          </div>

          <a className="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );

    case "event":
      return (
        <div
          className="block-content--preview-pages__col block-content--preview-pages__col-event"
          key={i}
        >
          <div
            data-history-node-id="2097"
            role="article"
            about="/fr/groupeevenements/quick-talk-tech-smile"
            className="event block-single-part-one-third-small clearfix"
          >
            <div className="field field--name-field-date field--type-datetime field--label-hidden field--item">
              <div className="date-day">{card.day}</div>
              <div className="date-month">{card.month}</div>
            </div>

            <h3 className="title-event">
              <span>{card.title}</span>
            </h3>

            <div className="field field--name-field-place field--type-string field--label-hidden field--item">
              {card.description}
            </div>
          </div>

          <a className="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );

    case "whitePaper":
      return (
        <div
          className="block-content--preview-pages__col block-content--preview-pages__col-white-paper"
          key={i}
        >
          <div
            data-history-node-id="2260"
            role="article"
            about="/fr/livres-blancslivres-blancs/linux-rt"
            className="white-paper is-promoted block-single-part-one-third-small clearfix"
          >
            <h3 className="title-white-papers">
              <span>{card.title}</span>
            </h3>
          </div>

          <a className="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );
  }
}

export default function AsyncCards() {
  const [cards, setCards] = useState<ICard[]>([]);
  useEffect(() => {
    fetch("http://localhost:3333/cards")
      .then((r) => r.json())
      .then((json) => setCards(json));
  }, []);

  const groupedCards = [];
  for (let i = 0; i < cards.length; i += 3) {
    groupedCards.push(cards.slice(i, i + 3));
  }

  return (
    <div className="field--item">
      <section className="block-content block-content-preview_pages">
        {groupedCards.map((group, i) => (
          <div className="block-content--preview-pages__row" key={i}>
            {group.map(getGroup)}
          </div>
        ))}
      </section>
    </div>
  );
}
