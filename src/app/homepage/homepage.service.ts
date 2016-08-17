import { Injectable } from '@angular/core';
import { GlobalService } from '../global.service';
import { AngularFire } from 'angularfire2';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HomepageService {
  posts: any;

  constructor(private globalService: GlobalService, private af: AngularFire) {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.af.database.list('/posts');
  }
}
