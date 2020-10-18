import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TribunaisService} from "./tribunais.service";
import {NavTribunaisComponent} from './nav-tribunais/nav-tribunais.component';
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
import {ProgressBarModule} from "primeng/progressbar";
import {InputTribunalComponent} from "./input-tribunal/input-tribunal.component";


@NgModule({
  declarations: [
    NavTribunaisComponent,
    InputTribunalComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ProgressBarModule
  ],
  providers: [
    TribunaisService
  ],
  exports: [
    NavTribunaisComponent,
    InputTribunalComponent
  ]
})
export class TribunaisModule {
}
