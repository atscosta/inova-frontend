import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnidadesJudiciariasService} from "./unidades-judiciarias.service";
import {UnidadeJudiciariaPipe} from "./unidade-judiciaria.pipe";
import {PanelUnidadeJudiciariaComponent} from './panel-unidade-judiciaria/panel-unidade-judiciaria.component';
import {PanelModule} from "primeng/panel";
import {ProgressBarModule} from "primeng/progressbar";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [UnidadeJudiciariaPipe, PanelUnidadeJudiciariaComponent],
  imports: [
    CommonModule,
    PanelModule,
    ProgressBarModule,
    ButtonModule,
  ],
  providers: [
    UnidadesJudiciariasService
  ],
  exports: [UnidadeJudiciariaPipe, PanelUnidadeJudiciariaComponent]
})
export class UnidadesJudiciariasModule {
}
