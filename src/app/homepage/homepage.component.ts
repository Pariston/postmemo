import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { GlobalService } from '../global.service';
import { HomepageService } from './homepage.service';
import { EditorComponent } from '../reusable/editor/editor';
import { AsyncPipe } from '@angular/common';
import { DomSanitizationService } from '@angular/platform-browser';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ReversePipe } from '../pipes/reverse';
import { Observable } from 'rxjs/Rx';
import { WhenPipe } from '../pipes/when';

@Component({
  moduleId: module.id,
  selector: 'app-homepage',
  templateUrl: 'homepage.component.html',
  styleUrls: ['homepage.component.css'],
  pipes: [ AsyncPipe, ReversePipe, WhenPipe ],
  directives: [ EditorComponent, ROUTER_DIRECTIVES ],
  providers: [ GlobalService, HomepageService ]
})

export class HomepageComponent implements OnInit, OnDestroy {
  expandedPosts: number[] = [];
  posts: any;
  loaded: boolean = false;

  constructor(private globalService: GlobalService,
              private homepageService: HomepageService,
              private sanitizer: DomSanitizationService)
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
    this.editorDisplayed = true;
  }

  getPostContent(content: any, index: number): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  ngOnInit() {}
  ngOnDestroy() {}
}
