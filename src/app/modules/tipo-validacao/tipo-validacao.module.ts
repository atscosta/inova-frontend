import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TipoValidacaoPipe} from "./tipo-validacao.pipe";



@NgModule({
  declarations: [TipoValidacaoPipe],
  imports: [
    CommonModule
  ],
  exports: [TipoValidacaoPipe]
})
export class TipoValidacaoModule { }
