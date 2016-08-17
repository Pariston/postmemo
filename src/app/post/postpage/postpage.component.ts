import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from '../../global.service';
import { PostpageService } from './postpage.service';
import { AngularFire } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { DomSanitizationService } from '@angular/platform-browser';
import { WhenPipe } from '../../pipes/when';

@Component({
  moduleId: module.id,
  selector: 'app-postpage',
  providers: [ GlobalService, PostpageService ],
  pipes: [ AsyncPipe, WhenPipe ],
  templateUrl: 'postpage.component.html',
  styleUrls: ['postpage.component.css', '../../homepage/homepage.component.css']
})

export class PostpageComponent implements OnInit, OnDestroy {
  post: any;
  sub: any;

  constructor(private af: AngularFire,
              private globalService: GlobalService,
              private ar: ActivatedRoute,
              private sanitizer: DomSanitizationService) {}

  getPostContent(content: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  ngOnInit() {
    this.sub = this.ar.params.subscribe(params => {
      let postId = params['id'];
      this.af.database.object('/posts/' + postId).subscribe(response => {
        this.post = response;
      });
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
