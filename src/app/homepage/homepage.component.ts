import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  moduleId: module.id,
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
  providers: [ GlobalService ]
})
export class HomepageComponent implements OnInit {
  constructor(private globalService: GlobalService) {}

  ngOnInit() {}

}
