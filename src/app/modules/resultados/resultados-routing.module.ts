import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultadosComponent} from './resultados/resultados.component';
import {TribunaisComponent} from "./tribunais/tribunais.component";

const routes: Routes = [
  {path: '', component: ResultadosComponent},
  {path: ':codigoTipoJustica', component: TribunaisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosRoutingModule {
}
