import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { AsyncComponent } from './pages/async/async.component';
import { BusyComponent } from './pages/busy/busy.component';
import { CounterComponent } from './pages/counter/counter.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'dynamic', component: DynamicComponent },
  { path: 'async', component: AsyncComponent },
  { path: 'busy', component: BusyComponent },
  { path: 'counter', component: CounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
