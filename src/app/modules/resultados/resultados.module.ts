import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResultadosRoutingModule} from './resultados-routing.module';
import {ResultadosComponent} from './resultados/resultados.component';
import {TiposJusticaModule} from "../tipos-justica/tipos-justica.module";
import {RouterModule} from "@angular/router";
import {TribunaisComponent} from './tribunais/tribunais.component';
import {TribunaisModule} from "../tribunais/tribunais.module";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";


@NgModule({
  declarations: [ResultadosComponent, TribunaisComponent],
  imports: [
    CommonModule,
    ResultadosRoutingModule,
    BreadcrumbModule,
    TiposJusticaModule,
    RouterModule,
    TribunaisModule,
    BreadcrumbModule,
    BreadcrumbModule,
    BreadcrumbModule,
  ]
})
export class ResultadosModule {
}
