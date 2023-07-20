import { Component, For, Match, Switch, createResource } from "solid-js";

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

function fetchCards() {
  return fetch("http://localhost:3333/cards").then((r) => r.json());
}

function matches<S extends T, T = unknown>(
  e: T,
  predicate: (e: T) => e is S
): S | false {
  return predicate(e) ? e : false;
}

const isReference = (card: ICard): card is IReference =>
  card.type === "reference";
const isNews = (card: ICard): card is INews => card.type === "news";
const isImage = (card: ICard): card is IImage => card.type === "image";
const isTechnology = (card: ICard): card is ITechnology =>
  card.type === "technology";
const isEvent = (card: ICard): card is IEvent => card.type === "event";
const isWhitePaper = (card: ICard): card is IWhitePaper =>
  card.type === "whitePaper";

const AsyncCards: Component = () => {
  const [cards] = createResource<ICard[]>(fetchCards);
  const groupedCards = () => {
    const groupedCards = [];
    const items = cards() ?? [];
    for (let i = 0; i < items.length; i += 3) {
      groupedCards.push(items.slice(i, i + 3));
    }
    return groupedCards;
  };

  return (
    <div class="field--item">
      <section class="block-content block-content-preview_pages">
        <For each={groupedCards()}>
          {(group) => (
            <div class="block-content--preview-pages__row">
              <For each={group}>
                {(card) => (
                  <Switch>
                    <Match when={matches(card, isReference)}>
                      {(card) => (
                        <div class="block-content--preview-pages__col block-content--preview-pages__col-reference">
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
                                    src={card().image}
                                    width="215"
                                    height="75"
                                    alt="Vignette"
                                    title="ERAM - logo"
                                    typeof="foaf:Image"
                                    class="img-responsive"
                                  />
                                </div>

                                <div class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                                  {card().description}
                                </div>
                              </div>
                            </div>
                            <div class="field--item"></div>
                            <div class="field--item"></div>
                            <div class="field--item"></div>
                            getGroup <div class="field--item"></div>
                            <div class="field--item"></div>
                          </div>
                          <a
                            class="block-content--preview-pages__col-link"
                            href={card().url}
                          >
                            <span>{card().link}</span>
                          </a>
                        </div>
                      )}
                    </Match>
                    <Match when={matches(card, isNews)}>
                      {(card) => (
                        <div class="block-content--preview-pages__col block-content--preview-pages__col-news">
                          <div
                            data-history-node-id="2241"
                            role="article"
                            about="/fr/groupeactualites/palindromejs"
                            class="news is-promoted block-single-part-one-third-small clearfix"
                          >
                            <h3 class="news-title">
                              <span>{card().title}</span>
                            </h3>

                            <div class="content">
                              <div class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                                {card().description}
                              </div>
                            </div>
                          </div>

                          <a
                            class="block-content--preview-pages__col-link"
                            href={card().url}
                          >
                            <span>{card().link}</span>
                          </a>
                        </div>
                      )}
                    </Match>
                    <Match when={matches(card, isImage)}>
                      {(card) => (
                        <div
                          style={{
                            "background-image": `url(${card().image})`,
                            "background-size": "cover",
                            "background-repeat": "no-repeat",
                          }}
                          class="block-content--preview-pages__col-picture"
                        >
                          <div class="block-content--preview-pages__news-picture">
                            <div class="block-content--preview-pages__news-triangle"></div>
                          </div>
                        </div>
                      )}
                    </Match>
                    <Match when={matches(card, isTechnology)}>
                      {(card) => (
                        <div
                          style={{
                            "background-image":
                              "url(http://www.smile.eu/sites/default/files/styles/preview_pages_pictures/public/2017-09/Drupal%20Copy_0.png?itok=CV-sCDWo)",
                            "background-size": "cover",
                            "background-repeat": "no-repeat",
                          }}
                          class="block-content--preview-pages__col block-content--preview-pages__col-technology"
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
                                  <span>{card().title}</span>
                                </h3>

                                <div class="content">
                                  <div class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item">
                                    {card().description}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="field--item"></div>
                            <div class="field--item"></div>
                            <div class="field--item"></div>
                            <div class="field--item"></div>
                          </div>

                          <a
                            class="block-content--preview-pages__col-link"
                            href={card().url}
                          >
                            <span>{card().link}</span>
                          </a>
                        </div>
                      )}
                    </Match>
                    <Match when={matches(card, isEvent)}>
                      {(card) => (
                        <div class="block-content--preview-pages__col block-content--preview-pages__col-event">
                          <div
                            data-history-node-id="2097"
                            role="article"
                            about="/fr/groupeevenements/quick-talk-tech-smile"
                            class="event block-single-part-one-third-small clearfix"
                          >
                            <div class="field field--name-field-date field--type-datetime field--label-hidden field--item">
                              <div class="date-day">{card().day}</div>
                              <div class="date-month">{card().month}</div>
                            </div>

                            <h3 class="title-event">
                              <span>{card().title}</span>
                            </h3>

                            <div class="field field--name-field-place field--type-string field--label-hidden field--item">
                              {card().description}
                            </div>
                          </div>

                          <a
                            class="block-content--preview-pages__col-link"
                            href={card().url}
                          >
                            <span>{card().link}</span>
                          </a>
                        </div>
                      )}
                    </Match>
                    <Match when={matches(card, isWhitePaper)}>
                      {(card) => (
                        <div class="block-content--preview-pages__col block-content--preview-pages__col-white-paper">
                          <div
                            data-history-node-id="2260"
                            role="article"
                            about="/fr/livres-blancslivres-blancs/linux-rt"
                            class="white-paper is-promoted block-single-part-one-third-small clearfix"
                          >
                            <h3 class="title-white-papers">
                              <span>{card().title}</span>
                            </h3>
                          </div>

                          <a
                            class="block-content--preview-pages__col-link"
                            href={card().url}
                          >
                            <span>{card().link}</span>
                          </a>
                        </div>
                      )}
                    </Match>
                  </Switch>
                )}
              </For>
            </div>
          )}
        </For>
      </section>
    </div>
  );
};

export default AsyncCards;
