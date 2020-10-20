import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'tipos-justica',
    loadChildren: () => import('./modules/navegacao/navegacao.module').then(m => m.NavegacaoModule),
  },
  {
    path: 'validacoes',
    loadChildren: () => import('./modules/validacoes/validacoes.module').then(m => m.ValidacoesModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
