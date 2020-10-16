import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutarRoutingModule } from './executar-routing.module';
import { ExecutarComponent } from './executar/executar.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TiposJusticaModule} from "../tipos-justica/tipos-justica.module";


@NgModule({
  declarations: [ExecutarComponent],
    imports: [
        CommonModule,
        ExecutarRoutingModule,
        BreadcrumbModule,
        TiposJusticaModule
    ]
})
export class ExecutarModule { }
