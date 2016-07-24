import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-loginpage',
  templateUrl: 'loginpage.component.html',
  styleUrls: ['loginpage.component.css'],
  providers: [ LoginService, GlobalService ],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginpageComponent implements OnInit {
  loginForm: FormGroup;
  loginCtrl = new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]);
  passwordCtrl = new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(30)]);

  constructor(private loginService: LoginService, private globalService: GlobalService, private router: Router) {
    globalService.navigateUser();
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      login: this.loginCtrl,
      password: this.passwordCtrl
    })
  }
}
