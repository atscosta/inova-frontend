import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { NavegacaoModule } from '../navegacao/navegacao.module';
import { ValidacoesRoutingModule } from './validacoes-routing.module';
import { ValidacoesComponent } from './pages/validacoes.component';

@NgModule({
  declarations: [ValidacoesComponent],
  imports: [
    CommonModule,
    ValidacoesRoutingModule,
    NavegacaoModule,
    CardModule,
    DropdownModule,
    FormsModule,
    TableModule,
    ToastModule,
    PanelModule,
  ]
})
export class ValidacoesModule {
}
