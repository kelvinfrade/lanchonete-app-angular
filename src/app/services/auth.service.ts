import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(public router: Router) { }

  canActivate(): boolean {
    let token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
