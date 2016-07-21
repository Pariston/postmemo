import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { AngularFire } from 'angularfire2';

@Injectable()
export class LoginService {
  loginSubscription: any;

  constructor(private router: Router, private service: GlobalService, private af: AngularFire) {}

  logIn(login: string, password: string) {

  }
}
