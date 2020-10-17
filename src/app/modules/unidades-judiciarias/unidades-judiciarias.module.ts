import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnidadesJudiciariasService} from "./unidades-judiciarias.service";
import {UnidadeJudiciariaPipe} from "./unidade-judiciaria.pipe";


@NgModule({
  declarations: [UnidadeJudiciariaPipe],
  imports: [
    CommonModule
  ],
  providers: [
    UnidadesJudiciariasService
  ],
  exports: [UnidadeJudiciariaPipe]
})
export class UnidadesJudiciariasModule {
}
