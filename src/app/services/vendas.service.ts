import { Injectable } from '@angular/core';
import { apiUrl } from '../env'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Venda } from '../models/venda';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private http: HttpClient) { }

  insertVenda(venda: Venda): Observable<Venda> {
    let token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'token ' + token
      })
    };
    return this.http.post<Venda>(apiUrl + 'vendas/', venda, httpOptions)
  }
}
