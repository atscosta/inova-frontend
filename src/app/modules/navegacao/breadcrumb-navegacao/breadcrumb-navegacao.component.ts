import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import { toTitleCase } from 'codelyzer/util/utils';
import {TiposJusticaService} from "../../tipos-justica/tipos-justica.service";
import {TribunaisService} from "../../tribunais/tribunais.service";
import {UnidadesJudiciariasService} from "../../unidades-judiciarias/unidades-judiciarias.service";
import {map, mergeMap} from "rxjs/operators";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-breadcrumb-navegacao',
  templateUrl: './breadcrumb-navegacao.component.html',
  styleUrls: ['./breadcrumb-navegacao.component.scss']
})
export class BreadcrumbNavegacaoComponent implements OnInit {

  private home = {order: 0, label: "Navegação", link: '/tipos-justica'};

  breadcrumbItens$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private tiposJusticaService: TiposJusticaService,
    private tribunaisService: TribunaisService,
    private unidadesJudiciariasService: UnidadesJudiciariasService) {
  }

  ngOnInit(): void {
    this.breadcrumbItens$ = this.route.params
      .pipe(
        map(this.mapParams),
        mergeMap(bcItensObservables => forkJoin(bcItensObservables)),
        map(this.finalizar)
      );
  }

  private finalizar = (bcItens: any[]) => {
    const itens = [this.home, ...bcItens].sort((a, b) => a.order - b.order);
    for (let i = 1; i < itens.length; i++) {
      const linkAnterior = itens[i - 1].link;
      const linkAtual = itens[i].link;
      itens[i].link = `${linkAnterior}${linkAtual}`;
    }
    return itens;
  };

  private mapParams = (params: Params) => {
    const outputArr: Observable<any>[] = [];
    params['codigoTipoJustica'] && outputArr
      .push(this.mapParamTipoJustica(params['codigoTipoJustica']));
    params['codigoTribunal'] && outputArr
      .push(this.mapParamTribunal(params['codigoTribunal']));
    params['codigoUnidadeJudiciaria'] && outputArr
      .push(this.mapParamUnidadeJudiciaria(params['codigoUnidadeJudiciaria']));
    return outputArr;
  }

  private mapParamTipoJustica = codigoTipoJustica => {
    return this.tiposJusticaService.findByCodigo(codigoTipoJustica)
      .pipe(map(tipoJustica => ({
        order: 1,
        label: toTitleCase(tipoJustica.descricao),
        link: `/${tipoJustica.codigo}/tribunais`
      })));
  };

  private mapParamTribunal = codigoTribunal => {
    return this.tribunaisService.findByCodigo(codigoTribunal)
      .pipe(map(tribunal => ({
        order: 2,
        label: tribunal.sigla,
        link: `/${tribunal.codigo}/unidades`
      })));
  };

  private mapParamUnidadeJudiciaria = codigoUnidadeJudiciaria => {
    return this.unidadesJudiciariasService.findByCodigo(codigoUnidadeJudiciaria)
      .pipe(map(unidadeJudiciaria => ({
        order: 3,
        label: unidadeJudiciaria.unidadeJudiciaria,
        link: `/${unidadeJudiciaria.codigo}/processos`
      })));
  }
}
