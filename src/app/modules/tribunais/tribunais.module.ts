import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TribunaisService} from "./tribunais.service";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
import {ProgressBarModule} from "primeng/progressbar";
import {InputTribunalComponent} from "./input-tribunal/input-tribunal.component";


@NgModule({
  declarations: [
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
    InputTribunalComponent
  ]
})
export class TribunaisModule {
}
