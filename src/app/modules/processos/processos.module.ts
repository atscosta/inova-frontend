import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelProcessoComponent } from './panel-processo/panel-processo.component';
import {PanelModule} from 'primeng/panel';
import { NpuPipe } from './npu.pipe';
import {ButtonModule} from 'primeng/button';
import {ProgressBarModule} from 'primeng/progressbar';
import {SucessoPipe} from './sucesso.pipe';
import {ResultadosModule} from '../resultados/resultados.module';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {NavegacaoRoutingModule} from '../navegacao/navegacao-routing.module';



@NgModule({
  declarations: [PanelProcessoComponent, NpuPipe, SucessoPipe],
    imports: [
        CommonModule,
        PanelModule,
        ButtonModule,
        ProgressBarModule,
        ResultadosModule,
        ProgressSpinnerModule,
        NavegacaoRoutingModule
    ],
  exports: [PanelProcessoComponent, NpuPipe]
})
export class ProcessosModule { }
