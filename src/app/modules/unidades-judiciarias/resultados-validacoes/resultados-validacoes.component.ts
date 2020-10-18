import {Component, Input, OnInit} from '@angular/core';
import {UnidadeJudiciaria} from "../unidade-judiciaria";
import {ResumoUnidadeJudiciariaService} from "../resumo-unidade-judiciaria.service";
import {Observable} from "rxjs";
import {map, tap} from "rxjs/operators";
import {ResumoUnidadeJudiciaria} from "../resumo-unidade-judiciaria";

@Component({
  selector: 'app-resultados-validacoes',
  templateUrl: './resultados-validacoes.component.html',
  styleUrls: ['./resultados-validacoes.component.scss']
})
export class ResultadosValidacoesComponent implements OnInit {

  @Input()
  unidadeJudiciaria: UnidadeJudiciaria;

  numTotal: number;
  data$: Observable<any>;

  loading = false;

  constructor(private resumoUnidadeJudiciariaService: ResumoUnidadeJudiciariaService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.data$ = this.resumoUnidadeJudiciariaService.findByCodigoUnidadeJudiciaria(this.unidadeJudiciaria.codigo)
      .pipe(
        map(this.mapResumo),
        tap(data => {
          console.log(`>>> ${this.unidadeJudiciaria.codigo}`, data);
          this.loading = false;
        })
      );
  }

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
