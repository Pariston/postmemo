import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { CKEditor } from 'ng2-ckeditor';

@Component({
  moduleId: module.id,
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
  providers: [ GlobalService ],
  directives: [ CKEditor ]
})
export class HomepageComponent implements OnInit {
  constructor(private globalService: GlobalService) {}

  content: any = "<b>lelelE</b>";
  print(something) {
    console.log();
  }
  ngOnInit() {}

}
