import Alpine from "/node_modules/alpinejs/dist/module.esm.js";

Alpine.data("cards", () => ({
  cards: [],
  async init() {
    const cards =
      (await (await fetch("http://localhost:3333/cards")).json()) ?? [];
    for (let i = 0; i < cards.length; i += 3) {
      this.cards.push(cards.slice(i, i + 3));
    }
  },
}));
