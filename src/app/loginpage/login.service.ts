import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginService {
  rememberMe: boolean = false;
  message: string = "";
  problem: boolean = false;

  constructor(private router: Router, private globalService: GlobalService, private af: AngularFire) {}

  logIn(loginForm: any) {
    let user = this.af.database.object('/users/' + loginForm.login);
    user.subscribe(response => {
      if(response.password === loginForm.password) {
        this.problem = false;
        if(this.rememberMe) localStorage.setItem('authentication', JSON.stringify(response));
        else sessionStorage.setItem('authentication', JSON.stringify(response));
        this.globalService.authentication = JSON.stringify(response);
        this.message = "Uszanowanie " + (response.firstname || response.login) + "! Przekierowuję Cię na stronę główną.";
        setTimeout(() => {
          window.location.href = "/";
        }, 3000);
      } else {
        this.problem = true;
        this.message = "Podany login lub hasło są nieprawidłowe.";
      }
    });
  }

  setRememberMe() {
    if(this.rememberMe === false) this.rememberMe = true;
    else this.rememberMe = false;
    console.log(this.rememberMe);
  }
}
