import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CKEditor } from 'ng2-ckeditor';
import { GlobalService } from '../../global.service';
import { PostManageService } from './post-manage.service';

@Component({
  moduleId: module.id,
  selector: 'post-manage',
  directives: [ CKEditor ],
  providers: [ GlobalService, PostManageService ],
  templateUrl: 'post-manage.component.html',
  styleUrls: ['post-manage.component.css']
})

export class PostManageComponent {
  constructor(private globalService: GlobalService, private service: PostManageService) {
    this.editorForm = new FormGroup({
      content: this.contentCtrl
    })
  }

  @Input() postMode: boolean = false;
  @Input() commentMode: boolean = false;

  editorForm: FormGroup;
  contentCtrl = new FormControl("", [ Validators.required ]);

  content: string = "";
  tags: string[] = [];
  tagsInput: string = "";

  manageTags(tags: string) {
    if(tags.includes(" ") && this.tags.indexOf(tags.slice(0, tags.length - 1)) === -1) {
      this.tags.push(tags.slice(0, tags.length - 1));
      this.tagsInput = "";
    } else if(tags.includes(" ")) {
      this.tagsInput = "";
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1);
  }
}
