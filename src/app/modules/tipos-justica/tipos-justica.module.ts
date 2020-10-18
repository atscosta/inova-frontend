import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavTiposJusticaComponent} from "./nav-tipos-justica/nav-tipos-justica.component";
import {TiposJusticaService} from "./tipos-justica.service";
import {ProgressBarModule} from "primeng/progressbar";


@NgModule({
  declarations: [
    NavTiposJusticaComponent
  ],
    imports: [
        CommonModule,
        ProgressBarModule
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
