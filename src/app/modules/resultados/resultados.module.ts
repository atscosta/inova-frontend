import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { ResultadosComponent } from './resultados/resultados.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';


@NgModule({
  declarations: [ResultadosComponent],
    imports: [
        CommonModule,
        ResultadosRoutingModule,
        BreadcrumbModule
    ]
})
export class ResultadosModule { }
