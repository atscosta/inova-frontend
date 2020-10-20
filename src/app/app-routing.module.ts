import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'tipos-justica',
    loadChildren: () => import('./modules/navegacao/navegacao.module').then(m => m.NavegacaoModule),
  },
  {
    path: 'validacoes',
    loadChildren: () => import('./modules/validacoes/validacoes.module').then(m => m.ValidacoesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
