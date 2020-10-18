import {Component, Input, OnInit} from '@angular/core';
import {UnidadeJudiciaria} from "../unidade-judiciaria";
import {UnidadesJudiciariasService} from "../unidades-judiciarias.service";

@Component({
  selector: 'app-resultados-validacoes',
  templateUrl: './resultados-validacoes.component.html',
  styleUrls: ['./resultados-validacoes.component.scss']
})
export class ResultadosValidacoesComponent implements OnInit {

  @Input()
  unidadeJudiciaria: UnidadeJudiciaria;
  data = {
    labels: ['Não analisados', 'Validados com sucesso', 'Apresentaram erros'],
    datasets: [
      {
        data: [300, 750, 450],
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
  };

  constructor(private unidadesJudiciariasService: UnidadesJudiciariasService) {
  }

  ngOnInit(): void {
  }

}
