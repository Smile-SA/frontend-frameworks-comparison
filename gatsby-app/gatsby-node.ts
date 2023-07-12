import path from "path";
import { GatsbyNode } from "gatsby";

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  try {
    const { createPage } = actions;
    const [cards, openSources, solutions, technologies] = await Promise.all([
      fetch("http://localhost:3333/cards").then((r) => r.json()),
      fetch("http://localhost:3333/opensource").then((r) => r.json()),
      fetch("http://localhost:3333/solutions").then((r) => r.json()),
      fetch("http://localhost:3333/technologies").then((r) => r.json()),
    ]);
    createPage({
      path: "/ssg",
      component: path.resolve("./src/templates/ssg.tsx"),
      context: {
        cards,
        openSources,
        solutions,
        technologies,
      },
    });
  } catch (e) {
    console.error(e);
  }
};
