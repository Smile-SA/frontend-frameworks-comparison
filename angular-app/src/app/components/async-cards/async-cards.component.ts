import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface IReference {
  type: 'reference';
  image: string;
  description: string;
  link: string;
  url: string;
}

interface INews {
  type: 'news';
  title: string;
  description: string;
  link: string;
  url: string;
}

interface IImage {
  type: 'image';
  image: string;
}

interface ITechnology {
  type: 'technology';
  title: string;
  description: string;
  link: string;
  url: string;
}

interface IEvent {
  type: 'event';
  day: string;
  month: string;
  title: string;
  description: string;
  link: string;
  url: string;
}

interface IWhitePaper {
  type: 'whitePaper';
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

@Component({
  selector: 'app-async-cards',
  templateUrl: './async-cards.component.html',
  styleUrls: ['./async-cards.component.css'],
})
export class AsyncCardsComponent implements OnInit {
  cards: ICard[] = [];

  get groupedCards() {
    const groupedCards = [];
    if (this.cards instanceof Array) {
      for (let i = 0; i < this.cards.length; i += 3) {
        groupedCards.push(this.cards.slice(i, i + 3));
      }
    }
    return groupedCards;
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCards().subscribe((cards) => (this.cards = cards));
  }

  getCards(): Observable<ICard[]> {
    return this.http.get<ICard[]>('http://localhost:3333/cards');
  }
}
