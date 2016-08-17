import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CKEditor } from 'ng2-ckeditor';
import { GlobalService } from '../../global.service';
import { EditorService } from './editor.service';

@Component({
  selector: 'editor',
  directives: [ CKEditor ],
  providers: [ GlobalService, EditorService ],
  template: `
    <img src="{{globalService._authentication.photoURL}}" class="photo photo-medium left" />
    <form [formGroup]="editorForm" (ngSubmit)="editorService.addPost(editorForm.value)">  
      <ckeditor
        formControlName="content"
        [(ngModel)]="content"
        [config]="{ skin: 'moono-dark'}">
      </ckeditor>
      <div class="post-write-container">
        <ul class="post-write">
          <li><button class="btn btn-second btn-submit right">{{editorService.button}}</button></li>
        </ul>
      </div>
    </form>
  `,
  styles: [`
    .post-write-container {
      overflow: hidden;
    }
    .post-write {
      margin-top: 20px;
      float: right;
      list-style: none;
    }
    .post-write li {
        display: inline-block;
        margin-left: 65px;
    }
  `]
})

export class EditorComponent {
  constructor(private globalService: GlobalService, private editorService: EditorService) {
    this.editorForm = new FormGroup({
      content: this.contentCtrl
    })
  }

  @Input() postMode: boolean = false;
  @Input() commentMode: boolean = false;

  editorForm: FormGroup;
  contentCtrl = new FormControl("", [ Validators.required ]);

  content: string = "";
}
