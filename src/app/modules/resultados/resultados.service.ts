import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Processo} from '../navegacao/processos/processo';
import {UnidadeJudiciaria} from '../unidades-judiciarias/unidade-judiciaria';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  executarPorProcessso = (processo: Processo) => {
    return this.http.post(`${this.apiUrl}/resultados`, {idProcesso: processo.id});
  }

  executarPorUnidadeJudiciaria = (unidadeJudiciaria: UnidadeJudiciaria) => {
    return this.http.post(`${this.apiUrl}/resultados`, {codUnidadeJudiciaria: unidadeJudiciaria.codigo})
      .pipe(take(1));
  }
}
