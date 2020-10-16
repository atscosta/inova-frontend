import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'executar',
    loadChildren: () => import('./modules/executar/executar.module').then(m => m.ExecutarModule),
  },
  {
    path: 'resultados',
    loadChildren: () => import('./modules/resultados/resultados.module').then(m => m.ResultadosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
