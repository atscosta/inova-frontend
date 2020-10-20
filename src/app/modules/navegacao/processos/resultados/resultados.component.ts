import {Component, OnInit} from '@angular/core';
import {ProcessosService} from '../processos.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map, mergeMap} from 'rxjs/operators';
import {Processo} from '../processo';
import {Resultado, Validation} from './resultado';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  processo: Processo;
  resultado: Resultado;

  constructor(private processoService: ProcessosService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params.idProcesso),
      mergeMap(idProcesso => this.processoService.findById(idProcesso))
    ).subscribe(processo => this.processo = processo);

    this.route.params.pipe(
      map(params => params.idProcesso),
      mergeMap(idProcesso => this.processoService.findResultadosById(idProcesso))
    ).subscribe(resultado => this.resultado = resultado);

  }

  totalSucesso() {
    return this.processo.validacoesRealizadas - this.processo.erros;
  }

  validacoesSucesso(): Validation[] {
    return this.resultado.validations.filter(validation => validation.result.success);
  }

  validacoesInconsistencias(): Validation[] {
    return this.resultado.validations.filter(validation => validation.result.error);
  }

  causedBy(validation: Validation): string[] {
    if (validation.result.causedBy) {
      return validation.result.causedBy.map(value => value.message);
    }

    return ['-'];
  }
}
