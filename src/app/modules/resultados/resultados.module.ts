import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados/resultados.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TiposJusticaModule} from "../tipos-justica/tipos-justica.module";


@NgModule({
  declarations: [ResultadosComponent],
    imports: [
        CommonModule,
        ResultadosRoutingModule,
        BreadcrumbModule,
        TiposJusticaModule
    ]
})
export class ResultadosModule { }
