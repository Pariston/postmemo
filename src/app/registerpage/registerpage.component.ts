import { Component, OnInit } from '@angular/core';
import { RegisterpageService } from './registerpage.service';
import { Control } from '@angular/common';
import { FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES, NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-registerpage',
  templateUrl: 'registerpage.component.html',
  styleUrls: ['registerpage.component.css'],
  providers: [ RegisterpageService, RegisterpageService ],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class RegisterpageComponent implements OnInit {
  userForm: FormGroup;
  loginCtrl = new FormControl("", [Validators.required, Validators.minLength(10), Validators.maxLength(15)]);
  passwordCtrl = new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(25)]);
  emailCtrl = new FormControl("", [Validators.required, Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")]);
  firstnameCtrl = new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*")]);
  surnameCtrl = new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]*")]);

  constructor(private service: RegisterpageService) {
    this.userForm = new FormGroup({
      login: this.loginCtrl,
      password: this.passwordCtrl,
      email: this.emailCtrl,
      firstname: this.firstnameCtrl,
      surname: this.surnameCtrl
    });
  }

  ngOnInit() {
  }

  get value(): string {
    return JSON.stringify(this.userForm.value, null, 2);
  }
}
