import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Validador } from './validador';

@Injectable({
    providedIn: 'root'
})
export class ValidacoesService {

    private readonly apiUrl: string;

    constructor(private http: HttpClient) {
        this.apiUrl = environment.apiUrl;
    }

    listarTodos = () => {
        return this.http.get<Validador[]>(`${this.apiUrl}/validadores`);
    }

    listarPorTipo = tipo => {
        return this.http.get<Validador[]>(`${this.apiUrl}/validadores?type=${tipo}`);
    }

    alterarValidadorHabilitado = (nome, habilitado) => {
        return this.http.put(`${this.apiUrl}/validadores/${nome}?enabled=${habilitado}`, null);
    }
}
