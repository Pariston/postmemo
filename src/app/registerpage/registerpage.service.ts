import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class RegisterpageService {
  users: any = [];
  message: string = "";
  userGender: string = "male";
  problem: boolean = false;

  constructor(private af: AngularFire, private router: Router) {
    af.database.list('/users')
      .subscribe(response => {
        this.users = response.map(item => item.$key.toLowerCase());
    })
  }

  setGender(gender: string) {
    this.userGender = gender;
  }

  registerUser(login: string, password: string, email: string, firstName: string, surname: string) {
    if(this.users.includes(login.toLocaleLowerCase())) {
      this.problem = true;
      this.message = "Podany login jest zajęty.";
    } else {
      this.message = "";
      this.af.database.object('/users/' + login).set({
        photoURL: 'images/default-photo.png',
        password: password,
        email: email,
        firstName: firstName,
        surname: surname,
        gender: this.userGender
      }).then(_ => {
        this.problem = false;
        if(this.userGender === 'female') this.message = "Brawo! Za chwilę zostaniesz przekierowana do ekranu logowania. Nie uciekaj : )";
        else this.message = "Brawo! Za chwilę zostaniesz przekierowany do ekranu logowania. Nie uciekaj!";
      })
    }
  }
}
