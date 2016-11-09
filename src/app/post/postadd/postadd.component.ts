import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { PostManageComponent } from '../../reusable/post-manage/post-manage.component';

@Component({
  moduleId: module.id,
  selector: 'app-postadd',
  directives: [REACTIVE_FORM_DIRECTIVES, PostManageComponent],
  templateUrl: 'postadd.component.html',
  styleUrls: ['postadd.component.css']
})
export class PostaddComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
