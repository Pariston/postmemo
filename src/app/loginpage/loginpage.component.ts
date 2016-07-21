import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-loginpage',
  templateUrl: 'loginpage.component.html',
  styleUrls: ['loginpage.component.css'],
  providers: [ LoginService, GlobalService ]
})
export class LoginpageComponent implements OnInit {
  constructor(private service: LoginService, private globalService: GlobalService, private router: Router) {
    if(globalService.loggedInStatus()) {
      router.navigate(['/homepage']);
    }
  }

  ngOnInit() {
  }

}
