import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExecutarRoutingModule} from './executar-routing.module';
import {ExecutarComponent} from './executar/executar.component';
import {TiposJusticaModule} from "../tipos-justica/tipos-justica.module";
import {RouterModule} from "@angular/router";
import {TribunaisComponent} from './tribunais/tribunais.component';
import {TribunaisModule} from "../tribunais/tribunais.module";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";


@NgModule({
  declarations: [ExecutarComponent, TribunaisComponent],
  imports: [
    CommonModule,
    ExecutarRoutingModule,
    BreadcrumbModule,
    TiposJusticaModule,
    RouterModule,
    TribunaisModule,
    BreadcrumbModule,
    BreadcrumbModule
  ]
})
export class ExecutarModule {
}
