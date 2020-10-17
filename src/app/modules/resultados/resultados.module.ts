import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ResultadosRoutingModule} from './resultados-routing.module';
import {ResultadosComponent} from './resultados/resultados.component';
import {TiposJusticaModule} from "../tipos-justica/tipos-justica.module";
import {RouterModule} from "@angular/router";
import {TribunaisComponent} from './tribunais/tribunais.component';
import {TribunaisModule} from "../tribunais/tribunais.module";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
import {UnidadesComponent} from './unidades/unidades.component';
import {UnidadesJudiciariasModule} from "../unidades-judiciarias/unidades-judiciarias.module";
import {PanelModule} from "primeng/panel";
import {ChartsModule} from "ng2-charts";


@NgModule({
  declarations: [ResultadosComponent, TribunaisComponent, UnidadesComponent],
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
    UnidadesJudiciariasModule,
    PanelModule,
    ChartsModule
  ]
})
export class ResultadosModule {
}
