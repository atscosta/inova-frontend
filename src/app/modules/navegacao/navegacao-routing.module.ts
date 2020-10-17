import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TiposJusticaComponent} from './tipos-justica/tipos-justica.component';
import {TribunaisComponent} from "./tribunais/tribunais.component";
import {UnidadesComponent} from "./unidades/unidades.component";

const routes: Routes = [
  {path: '', component: TiposJusticaComponent},
  {path: ':codigoTipoJustica/tribunais', component: TribunaisComponent},
  {path: ':codigoTipoJustica/tribunais/:codigoTribunal/unidades', component: UnidadesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacaoRoutingModule {
}
