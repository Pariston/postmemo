import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GlobalService } from './global.service';
import { AngularFire } from 'angularfire2';
import { ClickOutsideDirective } from "./reusable/clickOutside/clickOutside";


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'global.component.html',
  styleUrls: ['global.component.css'],
  directives: [ ROUTER_DIRECTIVES, ClickOutsideDirective ],
  providers: [ GlobalService ]
})
export class GlobalComponent {

  constructor(private globalService: GlobalService, private af: AngularFire) {
    af.database.list('/users')
      .subscribe(response => {
        globalService.users = response;
      })
    if(globalService._authentication) {
      let response = globalService._authentication;
      this.userLogin = response.$key;
      this.userEmail = response.email;
      this.userPhotoURL = response.photoURL;
      this.userFirstname = response.firstname;
      this.userSurname = response.surname;
      this.userName = response.firstname + " " + response.surname;
    }
  }
  userLogin: string;
  userEmail: string;
  userPhotoURL: string;
  userFirstname: string;
  userSurname: string;
  userName: string;

  //pseudo-animations
  navigationExpanded: boolean = true;
  navigationProfileExpanded: boolean = false;
  profileExpanded: boolean = false;

  manageNavigation() {
    if(this.navigationExpanded) this.navigationExpanded = false;
    else this.navigationExpanded = true;
  }

  manageProfileNavigation() {
    if(this.navigationProfileExpanded) this.navigationProfileExpanded = false;
    else this.navigationProfileExpanded = true;
  }

  manageProfile() {
    if(this.profileExpanded) this.profileExpanded = false;
    else this.profileExpanded = true;
  }

  close(div: any) {
    console.log(div);
  }
}
