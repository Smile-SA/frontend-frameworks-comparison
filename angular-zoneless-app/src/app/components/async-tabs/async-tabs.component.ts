import { Component, OnInit, signal } from '@angular/core';
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
  standalone: true,
  templateUrl: './async-tabs.component.html',
  styleUrls: ['./async-tabs.component.css'],
})
export class AsyncTabsComponent implements OnInit {
  solutionsTabIndex = signal(0);
  solutions = signal<ISolution[]>([]);
  technologies = signal<ISolution[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getSolutions().subscribe((solutions) => this.solutions.set(solutions));
    this.getTechnologies().subscribe((technologies) =>
      this.technologies.set(technologies)
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
    this.solutionsTabIndex.set(index);
  }
}
