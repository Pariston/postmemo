import { Component, OnInit } from '@angular/core';
import { RegisterpageService } from './registerpage.service';
import { FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'app-registerpage',
  templateUrl: 'registerpage.component.html',
  styleUrls: ['registerpage.component.css'],
  providers: [ RegisterpageService ],
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class RegisterpageComponent implements OnInit {
  userForm: FormGroup;
  loginCtrl = new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(30)]);
  passwordCtrl = new FormControl("", [Validators.required, Validators.minLength(7), Validators.maxLength(30)]);
  emailCtrl = new FormControl("", [Validators.required, Validators.pattern("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")]);
  firstnameCtrl = new FormControl("", [Validators.pattern("^[a-zA-Z]*"), Validators.minLength(2), Validators.maxLength(20)]);
  surnameCtrl = new FormControl("", [Validators.pattern("^[a-zA-Z]*"), Validators.minLength(2), Validators.maxLength(20)]);

  constructor(private registerService: RegisterpageService) {
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
