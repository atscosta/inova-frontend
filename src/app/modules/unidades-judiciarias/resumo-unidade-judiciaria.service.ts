import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ResumoUnidadeJudiciaria} from "./resumo-unidade-judiciaria";

@Injectable({
  providedIn: 'root'
})
export class ResumoUnidadeJudiciariaService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  findByCodigoUnidadeJudiciaria = codigoUnidadeJudiciaria => {
    return this.http.get<ResumoUnidadeJudiciaria>(`${this.apiUrl}/unidades-judiciarias/${codigoUnidadeJudiciaria}/resumo`);
  };
}
