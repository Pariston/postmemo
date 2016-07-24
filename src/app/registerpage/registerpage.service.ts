import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterpageService {
  message: string = "";
  userGender: string = "male";
  problem: boolean = false;

  constructor(private af: AngularFire, private globalService: GlobalService, private router: Router) {}

  setGender(gender: string) {
    this.userGender = gender;
  }

  registerUser(form: any) {
    let usersLogins: any = this.globalService.users.map(item => item.$key.toLowerCase());
    let usersEmails: any = this.globalService.users.map(item => item.email.toLowerCase());

    if(usersLogins.includes(form.login.toLowerCase())) {
      this.problem = true;
      this.message = "Podany login jest zajęty.";
    }
    else if(usersEmails.includes(form.email.toLowerCase())) {
      this.problem = true;
      this.message = "Podany adres email jest zajęty.";
    }
    else {
      this.message = "";
      this.af.database.object('/users/' + form.login).set({
        photoURL: 'images/default-photo.png',
        password: form.password,
        email: form.email,
        firstname: form.firstname,
        surname: form.surname,
        gender: this.userGender
      }).then(_ => {
        this.problem = false;
        let name = form.firstname || form.login;
        if(this.userGender === 'female') this.message = "Cześć " + name + "! Za chwilę zostaniesz przekierowana do ekranu logowania.";
        else this.message = "Cześć " + name + "! Za chwilę zostaniesz przekierowany do ekranu logowania.";

        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000)
      })
    }
  }
}
