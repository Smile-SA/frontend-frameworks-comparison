import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface ISolution {
  title: string;
  description: string;
  url: string;
  image: string;
  mobileImage: string;
}

@Component({
  selector: 'app-async-tabs',
  templateUrl: './async-tabs.component.html',
  styleUrls: ['./async-tabs.component.css'],
})
export class AsyncTabsComponent implements OnInit {
  solutionsTabIndex = 0;
  solutions: ISolution[] = [];
  technologies: ISolution[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSolutions().subscribe((solutions) => (this.solutions = solutions));
    this.getTechnologies().subscribe(
      (technologies) => (this.technologies = technologies)
    );
  }

  getSolutions(): Observable<ISolution[]> {
    return this.http.get<ISolution[]>('http://localhost:3333/solutions');
  }

  getTechnologies(): Observable<ISolution[]> {
    return this.http.get<ISolution[]>('http://localhost:3333/technologies');
  }

  handleSolutionsTabIndex(event: any, index: number) {
    event.preventDefault();
    this.solutionsTabIndex = index;
  }
}
