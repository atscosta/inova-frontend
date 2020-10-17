import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavTiposJusticaComponent} from "./nav-tipos-justica/nav-tipos-justica.component";
import {TiposJusticaService} from "./tipos-justica.service";


@NgModule({
  declarations: [
    NavTiposJusticaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TiposJusticaService
  ],
  exports: [
    NavTiposJusticaComponent
  ]
})
export class TiposJusticaModule {
}
