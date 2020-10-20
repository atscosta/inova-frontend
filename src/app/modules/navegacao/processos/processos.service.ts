import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Processo} from "./processo";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProcessosService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  findById = id => {
    return this.http.get<Processo>(`${this.apiUrl}/processos/${id}`)
      .pipe(tap(this.ajustarDataAjuizamento));
  }

  findByCodigoUnidadeJudiciaria = (codigoUnidadeJudiciaria, skip = 0, size = 12) => {
    const params = new HttpParams()
      .append('skip', String(skip))
      .append('size', String(size));
    return this.http.get<Processo[]>(`${this.apiUrl}/unidades-judiciarias/${codigoUnidadeJudiciaria}/processos`, {params})
      .pipe(tap(processos => processos.forEach(this.ajustarDataAjuizamento)));
  };

  private ajustarDataAjuizamento = (processo: Processo) => {
    if (processo.dataDistribuicao && processo.dataDistribuicao.length === 3) {
      processo.dataDistribuicao = new Date(
        processo.dataDistribuicao[0],
        processo.dataDistribuicao[1],
        processo.dataDistribuicao[2]
      );
    }
  }
}
