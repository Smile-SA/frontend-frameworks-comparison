import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { AsyncComponent } from './pages/async/async.component';
import { StaticLayoutComponent } from './layouts/static-layout/static-layout.component';
import { DynamicLayoutComponent } from './layouts/dynamic-layout/dynamic-layout.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { DynamicHeaderComponent } from './components/dynamic-header/dynamic-header.component';
import { DynamicFooterComponent } from './components/dynamic-footer/dynamic-footer.component';
import { DynamicHomepageComponent } from './components/dynamic-homepage/dynamic-homepage.component';
import { DynamicTabsComponent } from './components/dynamic-tabs/dynamic-tabs.component';
import { DynamicMapComponent } from './components/dynamic-map/dynamic-map.component';
import { AsyncHomepageComponent } from './components/async-homepage/async-homepage.component';
import { AsyncOpenSourcesComponent } from './components/async-open-sources/async-open-sources.component';
import { AsyncCardsComponent } from './components/async-cards/async-cards.component';
import { AsyncMapComponent } from './components/async-map/async-map.component';
import { AsyncTabsComponent } from './components/async-tabs/async-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LayoutComponent,
    DynamicComponent,
    AsyncComponent,
    StaticLayoutComponent,
    DynamicLayoutComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    DynamicHeaderComponent,
    DynamicFooterComponent,
    DynamicHomepageComponent,
    DynamicTabsComponent,
    DynamicMapComponent,
    AsyncHomepageComponent,
    AsyncOpenSourcesComponent,
    AsyncCardsComponent,
    AsyncMapComponent,
    AsyncTabsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
