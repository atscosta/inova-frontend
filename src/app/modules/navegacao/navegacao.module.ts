import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavegacaoRoutingModule} from './navegacao-routing.module';
import {TiposJusticaComponent} from './tipos-justica/tipos-justica.component';
import {TiposJusticaModule} from '../tipos-justica/tipos-justica.module';
import {RouterModule} from '@angular/router';
import {TribunaisComponent} from './tribunais/tribunais.component';
import {TribunaisModule} from '../tribunais/tribunais.module';
import {BreadcrumbModule} from '../breadcrumb/breadcrumb.module';
import {UnidadesComponent} from './unidades/unidades.component';
import {UnidadesJudiciariasModule} from '../unidades-judiciarias/unidades-judiciarias.module';
import {PanelModule} from 'primeng/panel';
import {ProgressBarModule} from 'primeng/progressbar';
import {ChartModule} from 'primeng/chart';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {PaginatorModule} from '../paginator/paginator.module';
import {BreadcrumbNavegacaoComponent} from './breadcrumb-navegacao/breadcrumb-navegacao.component';
import {ProcessosComponent} from './processos/processos.component';
import {ProcessosModule} from '../processos/processos.module';
import {ResultadosComponent} from './processos/resultados/resultados.component';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    TiposJusticaComponent,
    TribunaisComponent,
    UnidadesComponent,
    BreadcrumbNavegacaoComponent,
    ProcessosComponent,
    ResultadosComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    NavegacaoRoutingModule,
    BreadcrumbModule,
    TiposJusticaModule,
    RouterModule,
    TribunaisModule,
    BreadcrumbModule,
    BreadcrumbModule,
    BreadcrumbModule,
    UnidadesJudiciariasModule,
    PanelModule,
    ProgressBarModule,
    AccordionModule,
    ChartModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    FormsModule,
    DropdownModule,
    PaginatorModule,
    ProcessosModule,
    TableModule,
  ]
})
export class NavegacaoModule {
}
