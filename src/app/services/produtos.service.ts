import { Injectable } from '@angular/core';
import { apiUrl } from '../env'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor(private http: HttpClient) { }

  insertProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(apiUrl + 'produtos/', produto)
  }

  updateProduto(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(apiUrl + 'produtos/' + produto.id + '/', produto)
  }

  deleteProduto(produto: Produto): Observable<Produto> {
    return this.http.delete<Produto>(apiUrl + 'produtos/' + produto.id + '/')
  }

  getProduto(id) {
    return new Promise(resolve => {
      this.http.get(apiUrl + 'produtos/' + id + '/').subscribe(data => {
        console.log('Data in Service: ' + data)
        resolve(data)
      },
        err => {
          console.log('Error' + err)
        })

    })
  }
  
  getProdutos() {
    return new Promise(resolve => {
      this.http.get(apiUrl + 'produtos/').subscribe(data => {
        console.log('Data in Service: ' + data)
        resolve(data)
      },
        err => {
          console.log('Error' + err)
        })

    })
  }
}
