<script lang="ts">
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

// const { data: cards } = await useFetch<ICard[]>("http://localhost:3333/cards");
// const groupedCards = computed(() => {
//   const groupedCards = [];
//   if (cards.value instanceof Array) {
//     for (let i = 0; i < cards.value.length; i += 3) {
//       groupedCards.push(cards.value.slice(i, i + 3));
//     }
//   }
//   return groupedCards;
// });
export default {
  async setup() {
    const { data: cards } = await useFetch<ICard[]>(
      "http://localhost:3333/cards"
    );
    return { cards };
  },
  computed: {
    groupedCards() {
      const groupedCards = [];
      if (this.cards instanceof Array) {
        for (let i = 0; i < this.cards.length; i += 3) {
          groupedCards.push(this.cards.slice(i, i + 3));
        }
      }
      return groupedCards;
    },
  },
};
</script>
<template>
  <div class="field--item">
    <section class="block-content block-content-preview_pages">
      <div
        v-for="group of groupedCards"
        class="block-content--preview-pages__row"
      >
        <template v-for="card of group">
          <div
            v-if="card.type === 'reference'"
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
                      :src="card.image"
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
                    {{ card.description }}
                  </div>
                </div>
              </div>
              <div class="field--item"></div>
              <div class="field--item"></div>
              <div class="field--item"></div>
              <div class="field--item"></div>
              <div class="field--item"></div>
            </div>

            <a class="block-content--preview-pages__col-link" :href="card.url">
              <span>{{ card.link }}</span>
            </a>
          </div>
          <div
            v-else-if="card.type === 'news'"
            class="block-content--preview-pages__col block-content--preview-pages__col-news"
          >
            <div
              data-history-node-id="2241"
              role="article"
              about="/fr/groupeactualites/palindromejs"
              class="news is-promoted block-single-part-one-third-small clearfix"
            >
              <h3 class="news-title">
                <span>{{ card.title }}</span>
              </h3>

              <div class="content">
                <div
                  class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item"
                >
                  {{ card.description }}
                </div>
              </div>
            </div>

            <a class="block-content--preview-pages__col-link" :href="card.url">
              <span>{{ card.link }}</span>
            </a>
          </div>
          <div
            v-else-if="card.type === 'image'"
            :style="{
              backgroundImage: `url(${card.image})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }"
            class="block-content--preview-pages__col-picture"
          >
            <div class="block-content--preview-pages__news-picture">
              <div class="block-content--preview-pages__news-triangle"></div>
            </div>
          </div>
          <div
            v-else-if="card.type === 'technology'"
            :style="{
              backgroundImage:
                'url(https://www.smile.eu/sites/default/files/styles/preview_pages_pictures/public/2017-09/Drupal%20Copy_0.png?itok=CV-sCDWo)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }"
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
                    <span>{{ card.title }}</span>
                  </h3>

                  <div class="content">
                    <div
                      class="field field--name-field-description-preview-pages field--type-string-long field--label-hidden field--item"
                    >
                      {{ card.description }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="field--item"></div>
              <div class="field--item"></div>
              <div class="field--item"></div>
              <div class="field--item"></div>
            </div>

            <a class="block-content--preview-pages__col-link" :href="card.url">
              <span>{{ card.link }}</span>
            </a>
          </div>
          <div
            v-else-if="card.type === 'event'"
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
                <div class="date-day">{{ card.day }}</div>
                <div class="date-month">{{ card.month }}</div>
              </div>

              <h3 class="title-event">
                <span>{{ card.title }}</span>
              </h3>

              <div
                class="field field--name-field-place field--type-string field--label-hidden field--item"
              >
                {{ card.description }}
              </div>
            </div>

            <a class="block-content--preview-pages__col-link" :href="card.url">
              <span>{{ card.link }}</span>
            </a>
          </div>
          <div
            v-else-if="card.type === 'whitePaper'"
            class="block-content--preview-pages__col block-content--preview-pages__col-white-paper"
          >
            <div
              data-history-node-id="2260"
              role="article"
              about="/fr/livres-blancslivres-blancs/linux-rt"
              class="white-paper is-promoted block-single-part-one-third-small clearfix"
            >
              <h3 class="title-white-papers">
                <span>{{ card.title }}</span>
              </h3>
            </div>

            <a class="block-content--preview-pages__col-link" :href="card.url">
              <span>{{ card.link }}</span>
            </a>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>
