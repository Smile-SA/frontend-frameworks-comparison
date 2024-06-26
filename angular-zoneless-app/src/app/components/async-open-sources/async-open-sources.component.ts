import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IOpenSource {
  title: string;
  description: string;
  link: string;
  url: string;
}

@Component({
  selector: 'app-async-open-sources',
  standalone: true,
  templateUrl: './async-open-sources.component.html',
  styleUrls: ['./async-open-sources.component.css'],
})
export class AsyncOpenSourcesComponent implements OnInit {
  openSources = signal<IOpenSource[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getOpenSources().subscribe((openSources) =>
      this.openSources.set(openSources)
    );
  }

  getOpenSources(): Observable<IOpenSource[]> {
    return this.http.get<IOpenSource[]>('http://localhost:3333/opensource');
  }
}
