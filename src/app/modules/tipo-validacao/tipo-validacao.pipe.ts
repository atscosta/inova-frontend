import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'tipoValidacao'
})
export class TipoValidacaoPipe implements PipeTransform {

  private readonly tipoValidacaoMap: Map<string, string>;

  constructor() {
    this.tipoValidacaoMap = new Map<string, string>();
    this.tipoValidacaoMap.set('UNIDADE_JUDICIARIA', 'Unidade Judiciária');
    this.tipoValidacaoMap.set('ASSUNTOS', 'Assuntos');
    this.tipoValidacaoMap.set('CLASSES', 'Classes');
    this.tipoValidacaoMap.set('MOVIMENTOS', 'Movimentos');
    this.tipoValidacaoMap.set('FIELD', 'Campos');
    this.tipoValidacaoMap.set('OUTROS', 'Outros');
  }

  transform(value: string): string {
    return this.tipoValidacaoMap.get(value);
  }

}
