import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnidadesJudiciariasService} from "./unidades-judiciarias.service";
import {UnidadeJudiciariaPipe} from "./unidade-judiciaria.pipe";
import {PanelUnidadeJudiciariaComponent} from './panel-unidade-judiciaria/panel-unidade-judiciaria.component';
import {PanelModule} from "primeng/panel";
import {ProgressBarModule} from "primeng/progressbar";
import {ButtonModule} from "primeng/button";
import {CardFiltrosUnidadeJudiciariaComponent} from './card-filtros-unidade-judiciaria/card-filtros-unidade-judiciaria.component';
import {TribunaisModule} from "../tribunais/tribunais.module";
import {CardModule} from "primeng/card";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {ResultadosValidacoesComponent} from './resultados-validacoes/resultados-validacoes.component';
import {ChartModule} from "primeng/chart";
import {AgendarValidacaoComponent} from './agendar-validacao/agendar-validacao.component';
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {ProgressSpinnerModule} from "primeng/progressspinner";

@NgModule({
  declarations: [
    UnidadeJudiciariaPipe,
    PanelUnidadeJudiciariaComponent,
    CardFiltrosUnidadeJudiciariaComponent,
    ResultadosValidacoesComponent,
    AgendarValidacaoComponent
  ],
  imports: [
    CommonModule,
    PanelModule,
    ProgressBarModule,
    ButtonModule,
    TribunaisModule,
    CardModule,
    DropdownModule,
    FormsModule,
    ChartModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    ProgressSpinnerModule
  ],
  providers: [
    UnidadesJudiciariasService
  ],
  exports: [
    UnidadeJudiciariaPipe,
    PanelUnidadeJudiciariaComponent,
    CardFiltrosUnidadeJudiciariaComponent
  ]
})
export class UnidadesJudiciariasModule {
}
