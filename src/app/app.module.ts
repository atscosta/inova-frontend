import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {InlineSVGModule} from 'ng-inline-svg';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';

import localePt from '@angular/common/locales/pt';
import localePtExtra from '@angular/common/locales/extra/pt';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {ChartsModule} from 'ng2-charts';
import { HomeComponent } from './home/home.component';
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";

registerLocaleData(localePt, 'pt-BR', localePtExtra);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    BreadcrumbModule,
    MenubarModule,
    HttpClientModule,
    ChartsModule,
    DialogModule,
    ButtonModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
