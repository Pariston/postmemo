import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class GlobalService {
  authentication: any = JSON.parse(localStorage.getItem('authentication'));

  constructor(private af: AngularFire, private router: Router) {}

  loggedInStatus(): boolean {
    return this.authentication ? true : false;
  }

  logOut() {
    localStorage.removeItem('authentication');
    this.authentication = "";
  }

  navigateToHomepage() {
    this.router.navigate(['/homepage']);
  }
}
