import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TiposJusticaComponent} from "./tipos-justica.component";
import {TiposJusticaService} from "./tipos-justica.service";


@NgModule({
  declarations: [
    TiposJusticaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TiposJusticaService
  ],
  exports: [
    TiposJusticaComponent
  ]
})
export class TiposJusticaModule {
}
