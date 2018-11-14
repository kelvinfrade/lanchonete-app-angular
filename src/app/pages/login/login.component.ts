import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = { username: '', password: '' };

  constructor(private loginService: LoginService) { }

  autentica() {
    console.log('iniciando autenticação');
    this.loginService.login(this.user).then(data => {

      let ret: any = data;
      if (ret.token){
        console.log(ret.token);
        localStorage.setItem('token',ret.token);
      }else
        alert('Dados invalidos');
    });
  }
  ngOnInit() {
  }

}
