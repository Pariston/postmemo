import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {

  _authentication: any = JSON.parse(localStorage.getItem('authentication')) || JSON.parse(sessionStorage.getItem('authentication'));
  users: any[] = [];
  authenticationChange: Subject<string> = new Subject<string>();

  constructor(private af: AngularFire, private router: Router, private location: Location) {
    af.database.list('/users')
      .subscribe(response => {
        this.users = response;
      })

    this.authenticationChange.subscribe((response) => {
      this._authentication = response;
    })
  }

  set authentication(localItem: any) {
    if(localItem) this._authentication = JSON.parse(localItem);
    else this._authentication = localItem;
    this.authenticationChange.next(this._authentication);
  }

  logOut() {
    localStorage.removeItem('authentication');
    sessionStorage.removeItem('authentication');
    this.authentication = "";
  }

  navigateUser() {
    if(this._authentication) {
      if(this.location.path() === "/login" || this.location.path() === "/register") {
        this.navigateToHomepage();
      }
    }
  }

  navigateToHomepage() {
    this.router.navigate(['/homepage']);
  }
}
