import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ResultsComponent } from './results/results.component';
import { KittyCardComponent } from './kitty-card/kitty-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearcherComponent,
    ResultsComponent,
    KittyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
