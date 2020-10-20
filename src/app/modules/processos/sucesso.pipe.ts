import {Pipe, PipeTransform} from '@angular/core';
import {Processo} from "../navegacao/processos/processo";

@Pipe({
  name: 'sucesso'
})
export class SucessoPipe implements PipeTransform {

  transform(value: Processo): number {
    return Math.round(((value.validacoesRealizadas - value.erros) / value.validacoesRealizadas) * 100);
  }
}
