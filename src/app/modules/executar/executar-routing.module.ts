import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExecutarComponent} from './executar/executar.component';
import {TribunaisComponent} from "./tribunais/tribunais.component";

const routes: Routes = [
  {path: '', component: ExecutarComponent},
  {path: ':codigoTipoJustica', component: TribunaisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutarRoutingModule {
}
