import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ResultsComponent } from './results/results.component';
import { KittyCardComponent } from './kitty-card/kitty-card.component';
import { TurnosComponent } from './turnos/turnos.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { KpiComponent } from './kpi/kpi.component';
import { ReactTurnFormComponent } from './react-wrapper/react-turn-form-wrapper.component';
import { ReactFooterComponent } from './react-wrapper/react-footer-wrapper';
import { ReactBannerComponent } from './react-wrapper/react-banner';
import { HeaderComponent } from './header/header.component';





@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    SearcherComponent,
    ResultsComponent,
    KittyCardComponent,
    TurnosComponent,
    KpiComponent,
    ReactTurnFormComponent,
    ReactFooterComponent,
    ReactBannerComponent,
    HeaderComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    DropDownsModule,
    BrowserAnimationsModule,
    InputsModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
