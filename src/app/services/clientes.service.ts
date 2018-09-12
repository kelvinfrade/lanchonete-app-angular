import { Injectable } from '@angular/core';
import { apiUrl } from '../env'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private http:HttpClient) {}

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
