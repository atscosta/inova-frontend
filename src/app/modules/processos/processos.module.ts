import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelProcessoComponent } from './panel-processo/panel-processo.component';
import {PanelModule} from "primeng/panel";
import { NpuPipe } from './npu.pipe';
import {ButtonModule} from "primeng/button";
import {ProgressBarModule} from "primeng/progressbar";
import {SucessoPipe} from "./sucesso.pipe";
import {ResultadosModule} from "../resultados/resultados.module";
import {ProgressSpinnerModule} from "primeng/progressspinner";



@NgModule({
  declarations: [PanelProcessoComponent, NpuPipe, SucessoPipe],
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    ProgressBarModule,
    ResultadosModule,
    ProgressSpinnerModule
  ],
  exports: [PanelProcessoComponent]
})
export class ProcessosModule { }
