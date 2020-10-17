import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultadosComponent} from './resultados/resultados.component';
import {TribunaisComponent} from "./tribunais/tribunais.component";
import {UnidadesComponent} from "./unidades/unidades.component";

const routes: Routes = [
  {path: '', component: ResultadosComponent},
  {path: ':codigoTipoJustica', component: TribunaisComponent},
  {path: ':codigoTipoJustica/:codigoTribunal', component: UnidadesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultadosRoutingModule {
}
