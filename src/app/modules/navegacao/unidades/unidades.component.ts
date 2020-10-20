import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {ClassificacaoUnidade, TipoUnidade, UnidadeJudiciaria} from "../../unidades-judiciarias/unidade-judiciaria";
import {map, mergeMap, tap} from "rxjs/operators";
import {UnidadesJudiciariasService} from "../../unidades-judiciarias/unidades-judiciarias.service";
import {distinct} from "../../../shared/utils";

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  codigoTribunal: string;
  unidadesJudiciarias$: Observable<UnidadeJudiciaria[]>;

  tiposUnidades: TipoUnidade[];
  classificacoes: ClassificacaoUnidade[];

  numTotal: number;
  currentPage = 0;
  pageSize = 12;
  loading = false;

  filtros = {
    tipoUnidade: null,
    classificacao: null
  };

  constructor(private route: ActivatedRoute, private unidadesJudiciariasService: UnidadesJudiciariasService) {
  }

  ngOnInit(resetPagination: boolean = true): void {
    this.currentPage = resetPagination ? 0 : this.currentPage;
    this.numTotal = 0;
    this.loading = true;
    this.unidadesJudiciarias$ = this.route.params
      .pipe(
        map(params => params['codigoTribunal']),
        tap(codigoTribunal => this.codigoTribunal = codigoTribunal),
        mergeMap(this.unidadesJudiciariasService.findByCodigoTribunal),
        tap(this.initTiposUnidadesEClassificacoes),
        map(this.aplicarFiltros),
        tap(this.finalize),
        map(this.paginate),
      );
  }

  private initTiposUnidadesEClassificacoes = (unidadesJudiciarias: UnidadeJudiciaria[]) => {
    this.tiposUnidades = distinct(unidadesJudiciarias.map(uj => uj.tipoUnidade));
    this.classificacoes = distinct(unidadesJudiciarias.map(uj => uj.classificacaoUnidade));
  };

  private aplicarFiltros = (unidadesJudiciarias: UnidadeJudiciaria[]) => unidadesJudiciarias
    .filter(uj => {
      return (!this.filtros.tipoUnidade || this.filtros.tipoUnidade.codigo === uj.tipoUnidade.codigo) &&
        (!this.filtros.classificacao || this.filtros.classificacao.codigo === uj.classificacaoUnidade.codigo);
    });

  private finalize = (unidadesJudiciarias: UnidadeJudiciaria[]) => {
    this.numTotal = unidadesJudiciarias.length;
    this.loading = false;
  };

  private paginate = (unidadesJudiciarias: UnidadeJudiciaria[]) => unidadesJudiciarias
    .filter((uj, index) => {
      let firstElement = this.currentPage * this.pageSize;
      return index >= firstElement && index < (firstElement + this.pageSize);
    });

  pageChange(page: number) {
    this.currentPage = page;
    this.ngOnInit(false);
  }

  filtrosChanged(filtros: any) {
    this.filtros = filtros;
    this.ngOnInit();
  }
}
