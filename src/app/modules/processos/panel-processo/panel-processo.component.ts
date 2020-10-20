import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Processo} from "../../navegacao/processos/processo";
import {ResultadosService} from "../../resultados/resultados.service";

@Component({
  selector: 'app-panel-processo',
  templateUrl: './panel-processo.component.html',
  styleUrls: ['./panel-processo.component.scss']
})
export class PanelProcessoComponent implements OnInit {

  @Input()
  processo: Processo;

  @Output()
  onValidated = new EventEmitter<Processo>();

  loading = false;

  constructor(private resultadosService: ResultadosService) {
  }

  ngOnInit(): void {
  }

  executarValidacoes() {
    this.loading = true;
    this.resultadosService.executarPorProcessso(this.processo)
      .subscribe(result => {
        this.loading = false;
        this.onValidated.emit(this.processo);
      });
  }
}
