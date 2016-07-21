import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { GlobalService } from './global.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'global.component.html',
  styleUrls: ['global.component.css'],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ GlobalService ]
})
export class GlobalComponent {
  constructor(private service: GlobalService) {}
  title = 'app works!';
}
