import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-tagpage',
  templateUrl: 'tagpage.component.html',
  styleUrls: ['tagpage.component.css']
})
export class TagpageComponent implements OnInit, OnDestroy {

  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    this.routeSubscription = this.ar.params.subscribe(
      params => {
        let lel = params['tagname'];
        console.log(params['tagname']);
        this.tag = lel;
      }
    )
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  routeSubscription: any;
  tag: any;
}
