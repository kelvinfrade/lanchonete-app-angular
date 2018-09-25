import { Injectable } from '@angular/core';
import { apiUrl } from '../env'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private http:HttpClient) {}

  insertCliente(cliente: Cliente):Observable<Cliente> {
    return this.http.post<Cliente>(apiUrl+'clientes/',cliente)
  }

  getClientes(){
    return new Promise(resolve =>{
      this.http.get(apiUrl+'clientes/').subscribe(data =>{
        console.log('Data in Service: '+data)
        resolve(data)
      },
      err =>{
        console.log('Error'+err)
      })

    })
  }
}
