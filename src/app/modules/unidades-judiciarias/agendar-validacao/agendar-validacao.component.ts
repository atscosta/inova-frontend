import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UnidadeJudiciaria} from "../unidade-judiciaria";
import {ResultadosService} from "../../resultados/resultados.service";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-agendar-validacao',
  templateUrl: './agendar-validacao.component.html',
  styleUrls: ['./agendar-validacao.component.scss']
})
export class AgendarValidacaoComponent {

  @Input()
  unidadeJudiciaria: UnidadeJudiciaria;

  @Output()
  onClose = new EventEmitter<any>();

  agendar = false;
  dataAgendamento: Date;

  constructor(
    private resultadosService: ResultadosService,
    private messageService: MessageService) {
  }

  resetDate() {
    this.dataAgendamento = new Date();
  }

  executarValidacoes() {
    this.resultadosService.executarPorUnidadeJudiciaria(this.unidadeJudiciaria)
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso!',
          detail: 'As validações da unidade judiciária estão em andamento.'
        });
        this.onClose.emit();
      });
  }
}
