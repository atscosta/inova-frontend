import {Component, Input, OnInit} from '@angular/core';
import {UnidadeJudiciaria} from "../unidade-judiciaria";

@Component({
  selector: 'app-agendar-validacao',
  templateUrl: './agendar-validacao.component.html',
  styleUrls: ['./agendar-validacao.component.scss']
})
export class AgendarValidacaoComponent implements OnInit {

  @Input()
  unidadeJudiciaria: UnidadeJudiciaria;

  agendar = false;
  dataAgendamento: Date;

  constructor() {
  }

  ngOnInit(): void {
  }

}
