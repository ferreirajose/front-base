import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacao } from './publicacao.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicacaoService {
  private apiUrl = 'https://run.mocky.io/v3/13a04621-844a-4521-a050-43374e29d1f3'; // Substitua pelo endpoint real da API

  constructor(private http: HttpClient) {}

  getPublicacoes(): Observable<Publicacao[]> {
    return this.http.get<Publicacao[]>(this.apiUrl);
  }
}
