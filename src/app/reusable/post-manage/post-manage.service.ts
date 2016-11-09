import { Injectable } from '@angular/core';
import { AngularFire} from 'angularfire2';
import { GlobalService } from '../../global.service';
import { Router } from '@angular/router';

@Injectable()
export class PostManageService {
  author: any;
  button: string = "Dodaj wpis";

  constructor(private globalService: GlobalService,
              private af: AngularFire,
              private router: Router) {
    this.author = globalService._authentication;
  }

  addPost(post: any, tags: any) {
    this.button = "Operacja w toku...";
    this.af.database.list('/posts')
      .push({
        content: post.content,
        author: this.author.$key,
        date: new Date().toLocaleString(),
        tags: tags
      }).then(
        _ => {
          setTimeout(function() {
            this.button = "Dodano";
            this.router.navigate(['/post', _.path.o[1]])
          }.bind(this), 200);
        })
  }
}
