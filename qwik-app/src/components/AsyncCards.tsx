import { component$, useComputed$ } from "@builder.io/qwik";

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
          class="block-content--preview-pages__col block-content--preview-pages__col-reference"
          key={i}
        >
          <div class="field field--name-field-references field--type-entity-reference field--label-hidden field--items">
            <div class="field--item"></div>
            <div class="field--item"></div>
            <div class="field--item"></div>
            <div class="field--item">
              <div
                data-history-node-id="1691"
                role="article"
                about="/fr/references/eram"
                class="highlighted-reference is-promoted block-single-part-one-third-small clearfix"
              >
                <div class="field field--name-field-logo field--type-entity-reference field--label-hidden field--item">
                  {" "}
                  <img
                    src={card.image}
                    width="215"
                    height="75"
                    alt="Vignette"
                    title="ERAM - logo"
                    typeof="foaf:Image"
                    class="img-responsive"
                  />
                </div>

                <div class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                  {card.description}
                </div>
              </div>
            </div>
            <div class="field--item"></div>
            <div class="field--item"></div>
            <div class="field--item"></div>
            getGroup <div class="field--item"></div>
            <div class="field--item"></div>
          </div>
          <a class="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );

    case "news":
      return (
        <div
          class="block-content--preview-pages__col block-content--preview-pages__col-news"
          key={i}
        >
          <div
            data-history-node-id="2241"
            role="article"
            about="/fr/groupeactualites/palindromejs"
            class="news is-promoted block-single-part-one-third-small clearfix"
          >
            <h3 class="news-title">
              <span>{card.title}</span>
            </h3>

            <div class="content">
              <div class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                {card.description}
              </div>
            </div>
          </div>

          <a class="block-content--preview-pages__col-link" href={card.url}>
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
          class="block-content--preview-pages__col-picture"
          key={i}
        >
          <div class="block-content--preview-pages__news-picture">
            <div class="block-content--preview-pages__news-triangle"></div>
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
          class="block-content--preview-pages__col block-content--preview-pages__col-technology"
          key={i}
        >
          <div class="field field--name-field-technologies field--type-entity-reference field--label-hidden field--items">
            <div class="field--item">
              <div
                data-history-node-id="42"
                role="article"
                about="/fr/technologies/drupal"
                class="technology is-promoted block-single-part-one-third-small clearfix"
              >
                <h3 class="title-technology">
                  <span>{card.title}</span>
                </h3>

                <div class="content">
                  <div class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                    {card.description}
                  </div>
                </div>
              </div>
            </div>
            <div class="field--item"></div>
            <div class="field--item"></div>
            <div class="field--item"></div>
            <div class="field--item"></div>
          </div>

          <a class="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );

    case "event":
      return (
        <div
          class="block-content--preview-pages__col block-content--preview-pages__col-event"
          key={i}
        >
          <div
            data-history-node-id="2097"
            role="article"
            about="/fr/groupeevenements/quick-talk-tech-smile"
            class="event block-single-part-one-third-small clearfix"
          >
            <div class="field field--name-field-date field--type-datetime field--label-hidden field--item">
              <div class="date-day">{card.day}</div>
              <div class="date-month">{card.month}</div>
            </div>

            <h3 class="title-event">
              <span>{card.title}</span>
            </h3>

            <div class="field field--name-field-place field--type-string field--label-hidden field--item">
              {card.description}
            </div>
          </div>

          <a class="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );

    case "whitePaper":
      return (
        <div
          class="block-content--preview-pages__col block-content--preview-pages__col-white-paper"
          key={i}
        >
          <div
            data-history-node-id="2260"
            role="article"
            about="/fr/livres-blancslivres-blancs/linux-rt"
            class="white-paper is-promoted block-single-part-one-third-small clearfix"
          >
            <h3 class="title-white-papers">
              <span>{card.title}</span>
            </h3>
          </div>

          <a class="block-content--preview-pages__col-link" href={card.url}>
            <span>{card.link}</span>
          </a>
        </div>
      );
  }
}

export interface IProps {
  cards: ICard[];
}

export default component$<IProps>((props) => {
  const { cards } = props;
  const groupedCards = useComputed$(() => {
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 3) {
      groupedCards.push(cards.slice(i, i + 3));
    }
    return groupedCards;
  });

  return (
    <div class="field--item">
      <section class="block-content block-content-preview_pages">
        {groupedCards.value.map((group, i) => (
          <div class="block-content--preview-pages__row" key={i}>
            {group.map(getGroup)}
          </div>
        ))}
      </section>
    </div>
  );
});
