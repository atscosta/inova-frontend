import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidacoesComponent } from './pages/validacoes.component';

const routes: Routes = [
  { path: '', component: ValidacoesComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ]
})
export class ValidacoesRoutingModule {
}
