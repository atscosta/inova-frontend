import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'npu'
})
export class NpuPipe implements PipeTransform {

  transform(value: string): string {
    return (!value || value.length !== 20) ?
      value :
      `${value.substring(0, 7)}-${value.substring(7, 9)}.${value.substring(9, 13)}.${value.substring(13, 14)}.${value.substring(14, 16)}.${value.substring(16, 20)}`;
  }

}
