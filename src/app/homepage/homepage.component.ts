import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { EditorComponent } from '../reusable/editor/editor';
import { ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
  directives: [ EditorComponent ],
  providers: [ GlobalService ]
})
export class HomepageComponent implements OnInit {
  @ViewChild(EditorComponent) editor: EditorComponent;

  constructor(private globalService: GlobalService) {
    //console.log(this.editor.lel());
  }

  editorDisplayed: boolean = false;

  showEditor() {
    this.editorDisplayed = true;
  }

  cancel() {
    this.editorDisplayed = false;
  }

  ngOnInit() {}

}
