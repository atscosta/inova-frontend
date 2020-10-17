import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavegacaoRoutingModule} from './navegacao-routing.module';
import {TiposJusticaComponent} from './tipos-justica/tipos-justica.component';
import {TiposJusticaModule} from "../tipos-justica/tipos-justica.module";
import {RouterModule} from "@angular/router";
import {TribunaisComponent} from './tribunais/tribunais.component';
import {TribunaisModule} from "../tribunais/tribunais.module";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
import {UnidadesComponent} from './unidades/unidades.component';
import {UnidadesJudiciariasModule} from "../unidades-judiciarias/unidades-judiciarias.module";
import {PanelModule} from "primeng/panel";
import {ProgressBarModule} from 'primeng/progressbar';
import {ChartModule} from "primeng/chart";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTribunalComponent} from './unidades/input-tribunal/input-tribunal.component';
import {SelectTipoUnidadeComponent} from './unidades/select-tipo-unidade/select-tipo-unidade.component';
import {SelectClassificacaoComponent} from './unidades/select-classificacao/select-classificacao.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {PaginatorModule} from "primeng/paginator";


@NgModule({
  declarations: [
    TiposJusticaComponent,
    TribunaisComponent,
    UnidadesComponent,
    InputTribunalComponent,
    SelectTipoUnidadeComponent,
    SelectClassificacaoComponent
  ],
  imports: [
    CommonModule,
    NavegacaoRoutingModule,
    BreadcrumbModule,
    TiposJusticaModule,
    RouterModule,
    TribunaisModule,
    BreadcrumbModule,
    BreadcrumbModule,
    BreadcrumbModule,
    UnidadesJudiciariasModule,
    PanelModule,
    ProgressBarModule,
    ChartModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    PaginatorModule
  ]
})
export class NavegacaoModule {
}
