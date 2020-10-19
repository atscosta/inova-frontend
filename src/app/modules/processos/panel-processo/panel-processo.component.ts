import {Component, Input, OnInit} from '@angular/core';
import {Processo} from "../../navegacao/processos/processo";

@Component({
  selector: 'app-panel-processo',
  templateUrl: './panel-processo.component.html',
  styleUrls: ['./panel-processo.component.scss']
})
export class PanelProcessoComponent implements OnInit {

  @Input()
  processo: Processo;

  constructor() {
  }

  ngOnInit(): void {
  }

  executarValidacoes() {

  }
}
