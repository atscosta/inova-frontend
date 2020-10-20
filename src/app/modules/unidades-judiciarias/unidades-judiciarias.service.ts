import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UnidadeJudiciaria} from "./unidade-judiciaria";

@Injectable({
  providedIn: 'root'
})
export class UnidadesJudiciariasService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  findByCodigo = codigo => {
    return this.http.get<UnidadeJudiciaria>(`${this.apiUrl}/unidades-judiciarias/${codigo}`);
  };

  findByCodigoTribunal = codigoTribunal => {
    const params = new HttpParams().append('codigoTribunal', codigoTribunal);
    return this.http.get<UnidadeJudiciaria[]>(`${this.apiUrl}/unidades-judiciarias`, {params});
  };
}
