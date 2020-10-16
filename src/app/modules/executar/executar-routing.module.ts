import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExecutarComponent} from './executar/executar.component';

const routes: Routes = [
  {path: '', component: ExecutarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutarRoutingModule {
}
