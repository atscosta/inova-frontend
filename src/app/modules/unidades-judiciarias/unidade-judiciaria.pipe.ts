import {Pipe, PipeTransform} from '@angular/core';
import {UnidadeJudiciaria} from "./unidade-judiciaria";

@Pipe({
  name: 'unidadeJudiciaria'
})
export class UnidadeJudiciariaPipe implements PipeTransform {

  transform(value: UnidadeJudiciaria): string {
    return value ? `[${value.codigo}] ${value.unidadeJudiciaria}` : null;
  }
}
