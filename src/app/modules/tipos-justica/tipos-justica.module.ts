import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TiposJusticaService} from "./tipos-justica.service";
import {ProgressBarModule} from "primeng/progressbar";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProgressBarModule
  ],
  providers: [
    TiposJusticaService
  ],
  exports: []
})
export class TiposJusticaModule {
}
