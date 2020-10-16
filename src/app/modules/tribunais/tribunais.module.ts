import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TribunaisService} from "./tribunais.service";
import {TribunaisComponent} from './tribunais.component';
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";


@NgModule({
  declarations: [TribunaisComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  providers: [
    TribunaisService
  ],
  exports: [TribunaisComponent]
})
export class TribunaisModule {
}
