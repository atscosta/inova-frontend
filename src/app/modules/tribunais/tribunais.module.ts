import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TribunaisService} from "./tribunais.service";
import {NavTribunaisComponent} from './nav-tribunais/nav-tribunais.component';
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";


@NgModule({
  declarations: [NavTribunaisComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  providers: [
    TribunaisService
  ],
  exports: [NavTribunaisComponent]
})
export class TribunaisModule {
}
