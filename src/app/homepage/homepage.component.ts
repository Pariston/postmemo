import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { GlobalService } from '../global.service';
import { HomepageService } from './homepage.service';
import { AsyncPipe } from '@angular/common';
import { DomSanitizationService } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { ReversePipe } from '../pipes/reverse';
import { WhenPipe } from '../pipes/when';

@Component({
  moduleId: module.id,
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
  pipes: [ AsyncPipe, ReversePipe, WhenPipe ],
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ GlobalService, HomepageService ]
})

export class HomepageComponent implements OnInit, OnDestroy {
  expandedPosts: number[] = [];
  posts: any;
  loaded: boolean = false;

  constructor(private globalService: GlobalService,
              private homepageService: HomepageService,
              private sanitizer: DomSanitizationService,
              private router: Router)
  {
    homepageService.posts
      .subscribe(response => {
        this.posts = response.reverse();
        this.loaded = true;
      })
  }

  editorDisplayed: boolean = false;

  getHeight(postDiv: any): boolean {
    return postDiv.offsetHeight >= 200;
  }

  expand(index: number) {
    this.expandedPosts.push(index);
  }

  showEditor() {
    this.router.navigate(['/post/create']);
  }

  getPostContent(content: any, index: number): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  ngOnInit() {}
  ngOnDestroy() {}
}
