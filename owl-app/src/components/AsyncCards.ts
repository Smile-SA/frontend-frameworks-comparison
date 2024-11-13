import { Component, onMounted, useState, xml } from "@odoo/owl";

export class AsyncCards extends Component {
  static template = xml`<div class="field--item">
  <section class="block-content block-content-preview_pages">
    <div class="block-content--preview-pages__row" t-foreach="groupedCards" t-as="group" t-key="$as_index">
      <t t-foreach="group" t-as="card" t-key="$as_index">
        <div
          t-if="card.type === 'reference'"
          class="block-content--preview-pages__col block-content--preview-pages__col-reference"
        >
          <div
            class="field field--name-field-references field--type-entity-reference field--label-hidden field--items"
          >
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
                <div
                  class="field field--name-field-logo field--type-entity-reference field--label-hidden field--item"
                >
                  <img
                    t-att-src="card.image"
                    width="215"
                    height="75"
                    alt="Vignette"
                    title="ERAM - logo"
                    typeof="foaf:Image"
                    class="img-responsive"
                  />
                </div>

                <div
                  class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item"
                >
                  <t t-esc="card.description"/>
                </div>
              </div>
            </div>
            <div class="field--item"></div>
            <div class="field--item"></div>
            <div class="field--item"></div>
            <div class="field--item"></div>
            <div class="field--item"></div>
          </div>

          <a
            class="block-content--preview-pages__col-link"
            t-att-href="card.url"
            rel="external"
          >
            <span><t t-esc="card.link"/></span>
          </a>
        </div>
        <div
          t-elif="card.type === 'news'"
          class="block-content--preview-pages__col block-content--preview-pages__col-news"
        >
          <div
            data-history-node-id="2241"
            role="article"
            about="/fr/groupeactualites/palindromejs"
            class="news is-promoted block-single-part-one-third-small clearfix"
          >
            <h3 class="news-title">
              <span><t t-esc="card.title"/></span>
            </h3>

            <div class="content">
              <div
                class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item"
              >
                <t t-esc="card.description"/>
              </div>
            </div>
          </div>

          <a
            class="block-content--preview-pages__col-link"
            t-att-href="card.url"
            rel="external"
          >
            <span><t t-esc="card.link"/></span>
          </a>
        </div>

        <div
          t-elif="card.type === 'image'"
          t-attf-style="
            background-image: url({{card.image}});
            background-size: cover;
            background-repeat: no-repeat;
          "
          class="block-content--preview-pages__col-picture"
        >
          <div
            class="block-content--preview-pages__news-picture"
          >
            <div
              class="block-content--preview-pages__news-triangle"
            ></div>
          </div>
        </div>
        <div
          t-elif="card.type === 'technology'"
          style="
            background-image: url(https://www.smile.eu/sites/default/files/styles/preview_pages_pictures/public/2017-09/Drupal%20Copy_0.png?itok=CV-sCDWo);
            background-size: cover;
            background-repeat: no-repeat;
          "
          class="block-content--preview-pages__col block-content--preview-pages__col-technology"
        >
          <div
            class="field field--name-field-technologies field--type-entity-reference field--label-hidden field--items"
          >
            <div class="field--item">
              <div
                data-history-node-id="42"
                role="article"
                about="/fr/technologies/drupal"
                class="technology is-promoted block-single-part-one-third-small clearfix"
              >
                <h3 class="title-technology">
                  <span><t t-esc="card.title"/></span>
                </h3>

                <div class="content">
                  <div
                    class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item"
                  >
                    <t t-esc="card.description"/>
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
            t-att-href="card.url"
            rel="external"
          >
            <span><t t-esc="card.link"/></span>
          </a>
        </div>
        <div
          t-elif="card.type === 'event'"
          class="block-content--preview-pages__col block-content--preview-pages__col-event"
        >
          <div
            data-history-node-id="2097"
            role="article"
            about="/fr/groupeevenements/quick-talk-tech-smile"
            class="event block-single-part-one-third-small clearfix"
          >
            <div
              class="field field--name-field-date field--type-datetime field--label-hidden field--item"
            >
              <div class="date-day"><t t-esc="card.day"/></div>
              <div class="date-month"><t t-esc="card.month"/></div>
            </div>

            <h3 class="title-event">
              <span><t t-esc="card.title"/></span>
            </h3>

            <div
              class="field field--name-field-place field--type-string field--label-hidden field--item"
            >
              <t t-esc="card.description"/>
            </div>
          </div>

          <a
            class="block-content--preview-pages__col-link"
            t-att-href="card.url"
            rel="external"
          >
            <span><t t-esc="card.link"/></span>
          </a>
        </div>
        <div
          t-elif="card.type === 'whitePaper'"
          class="block-content--preview-pages__col block-content--preview-pages__col-white-paper"
        >
          <div
            data-history-node-id="2260"
            role="article"
            about="/fr/livres-blancslivres-blancs/linux-rt"
            class="white-paper is-promoted block-single-part-one-third-small clearfix"
          >
            <h3 class="title-white-papers">
              <span><t t-esc="card.title"/></span>
            </h3>
          </div>

          <a
            class="block-content--preview-pages__col-link"
            t-att-href="card.url"
            rel="external"
          >
            <span><t t-esc="card.link"/></span>
          </a>
        </div>
      </t>
    </div>
  </section>
</div>`;
  state = useState<{ cards: ICard[] }>({ cards: [] });
  setup() {
    onMounted(() => {
      fetch("http://localhost:3333/cards")
        .then((r) => r.json())
        .then((json) => (this.state.cards = json));
    });
  }
  get groupedCards() {
    const groupedCards = [];
    if (this.state.cards instanceof Array) {
      for (let i = 0; i < this.state.cards.length; i += 3) {
        groupedCards.push(this.state.cards.slice(i, i + 3));
      }
    }
    return groupedCards;
  }
}

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
