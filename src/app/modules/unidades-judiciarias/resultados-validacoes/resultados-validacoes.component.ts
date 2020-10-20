import {Component, Input, OnInit} from '@angular/core';
import {UnidadeJudiciaria} from "../unidade-judiciaria";
import {ResumoUnidadeJudiciariaService} from "../resumo-unidade-judiciaria.service";
import {interval, Observable} from "rxjs";
import {map, mergeMap, tap} from "rxjs/operators";
import {ResumoUnidadeJudiciaria} from "../resumo-unidade-judiciaria";

@Component({
  selector: 'app-resultados-validacoes',
  templateUrl: './resultados-validacoes.component.html',
  styleUrls: ['./resultados-validacoes.component.scss']
})
export class ResultadosValidacoesComponent implements OnInit {

  @Input()
  unidadeJudiciaria: UnidadeJudiciaria;

  @Input()
  execucaoEmAndamento: boolean;

  numTotal: number;
  data$: Observable<any>;

  loading = false;

  constructor(private resumoUnidadeJudiciariaService: ResumoUnidadeJudiciariaService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.data$ = this.execucaoEmAndamento ? this.findAndMapLoop() : this.findAndMap();
  }

  private findAndMapLoop = () => interval(10000).pipe(mergeMap(this.findAndMap));

  private findAndMap = () => this.resumoUnidadeJudiciariaService.findByCodigoUnidadeJudiciaria(this.unidadeJudiciaria.codigo)
    .pipe(
      tap(resumo => (resumo.countProcessos === resumo.countProcessosValidados) && (this.execucaoEmAndamento = false)),
      map(this.mapResumo),
      tap(() => this.loading = false)
    );

  private mapResumo = (resumo: ResumoUnidadeJudiciaria) => {
    this.numTotal = resumo.countProcessos;
    let dataDefault = this.getDataDefault();
    dataDefault.datasets[0].data = this.convertData(resumo);
    return dataDefault;
  };

  private convertData = (resumo: ResumoUnidadeJudiciaria) => [
    resumo.countProcessos - resumo.countProcessosValidados,
    resumo.countProcessosValidadosComSucesso,
    resumo.countProcessosValidados - resumo.countProcessosValidadosComSucesso
  ];

  getDataDefault = () => (
    {
      labels: ['Não analisados', 'Validados com sucesso', 'Apresentaram erros'],
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: [
            "#e0e0e0",
            "#81c784",
            "#ff8a65"
          ],
          hoverBackgroundColor: [
            "#9e9e9e",
            "#00c853",
            "#dd2c00"
          ]
        }]
    }
  );
}
