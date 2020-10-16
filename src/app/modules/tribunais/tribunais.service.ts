import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Tribunal} from "./tribunal";

@Injectable({
  providedIn: 'root'
})
export class TribunaisService {

  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  findByCodigoJustica = codigoJustica => {
    let params = new HttpParams().append('codigoJustica', codigoJustica);
    return this.http.get<Tribunal[]>(`${this.apiUrl}/tribunais`, {params});
  }

  findByUf = uf => {
    let params = new HttpParams().append('uf', uf);
    return this.http.get<Tribunal[]>(`${this.apiUrl}/tribunais`, {params});
  }
}
