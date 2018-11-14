import { Injectable } from '@angular/core';
import { apiUrl } from '../env';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(user){
    return new Promise(resolve => {
      return this.http.post<Usuario>(apiUrl + 'token/', user).subscribe(data => {
        resolve(data)
      },
        err => {
          console.log('Erro: ' + err);
          resolve(err.error);
        })
    })
  }
}
