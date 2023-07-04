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
