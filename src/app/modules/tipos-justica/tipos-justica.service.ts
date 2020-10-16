import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {TipoJustica} from "./tipo-justica";

@Injectable({
  providedIn: 'root'
})
export class TiposJusticaService {

  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  findAll = () => {
    return this.http.get<TipoJustica[]>(`${this.apiUrl}/tipos-justica`);
  }
}
