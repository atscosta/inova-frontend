import { Component, OnInit } from '@angular/core';
import { MessageService, SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { ValidacoesService } from '../validacoes.service';
import { Validador } from '../validador';

@Component({
  selector: 'app-validacoes',
  templateUrl: './validacoes.component.html',
  styleUrls: ['./validacoes.component.scss'],
  providers: [MessageService]
})
export class ValidacoesComponent implements OnInit {

  validadores$: Observable<Validador[]> = this.service.listarTodos();
  tipoSelecionado: string;
  tipoSelectItems: SelectItem[] = [
    {label: 'TODOS', value: 'TODOS'},
    {label: 'Unidades Judiciárias', value: 'UNIDADE_JUDICIARIA'},
    {label: 'Assuntos', value: 'ASSUNTOS'},
    {label: 'Classes', value: 'CLASSES'},
    {label: 'Movimentos', value: 'MOVIMENTOS'},
    {label: 'Campos', value: 'FIELD'},
    {label: 'Outros', value: 'OUTROS'},
  ];

  constructor(private service: ValidacoesService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  refresh() {
    if (this.tipoSelecionado === 'TODOS') {
      this.validadores$ = this.service.listarTodos();
    } else {
      this.validadores$ = this.service.listarPorTipo(this.tipoSelecionado);
    }
    console.log(this.validadores$);
  }

  alterarValidadorHabilitado($event: any, validador: Validador) {
    validador.enabled = $event;
    this.service.alterarValidadorHabilitado(validador.name, validador.enabled)
      .subscribe(() => this.infoSuccess($event));
  }

  infoSuccess = enabled => this.messageService.add(
    {severity:'success', summary:`${enabled? 'Habilitado' : 'Desabilitado'}`, detail:'Validador Alterado'});
}
