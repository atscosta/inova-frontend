import {Component, Input, OnInit} from '@angular/core';
import {UnidadeJudiciaria} from "../unidade-judiciaria";

@Component({
  selector: 'app-panel-unidade-judiciaria',
  templateUrl: './panel-unidade-judiciaria.component.html',
  styleUrls: ['./panel-unidade-judiciaria.component.scss']
})
export class PanelUnidadeJudiciariaComponent implements OnInit {

  @Input()
  unidadeJudiciaria: UnidadeJudiciaria;

  showModalAgendarValidacao = false;
  execucaoEmAndamento = false;
  showResultados = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  startExecucaoEmAndamento() {
    this.showModalAgendarValidacao = false;
    this.execucaoEmAndamento = true;
    this.showResultados = false;
    setTimeout(() => this.showResultados = true, 1000);
  }
}
