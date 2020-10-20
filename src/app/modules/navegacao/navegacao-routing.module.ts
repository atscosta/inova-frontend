import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TiposJusticaComponent} from './tipos-justica/tipos-justica.component';
import {TribunaisComponent} from './tribunais/tribunais.component';
import {UnidadesComponent} from './unidades/unidades.component';
import {ProcessosComponent} from './processos/processos.component';
import {ResultadosComponent} from './processos/resultados/resultados.component';

const routes: Routes = [
  {
    path: '',
    component: TiposJusticaComponent
  },
  {
    path: ':codigoTipoJustica/tribunais',
    component: TribunaisComponent
  },
  {
    path: ':codigoTipoJustica/tribunais/:codigoTribunal/unidades',
    component: UnidadesComponent
  },
  {
    path: ':codigoTipoJustica/tribunais/:codigoTribunal/unidades/:codigoUnidadeJudiciaria/processos',
    component: ProcessosComponent
  },
  {
    path: ':codigoTipoJustica/tribunais/:codigoTribunal/unidades/:codigoUnidadeJudiciaria/processos/:idProcesso/validacoes',
    component: ResultadosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegacaoRoutingModule {
}
