import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class PostpageService implements OnInit, OnDestroy {
  post: any;
  sub: any;

  constructor(private af: AngularFire, private ar: ActivatedRoute) {}

  ngOnInit() {
    // this.sub = this.ar.params.subscribe(params => {
    //   let postId = params['id'];
    //   this.af.database.object('/posts/' + postId).subscribe(response => {
    //     this.post = response;
    //   });
    // })
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
