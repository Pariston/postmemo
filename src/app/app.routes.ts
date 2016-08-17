import { provideRouter, RouterConfig } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { PostpageComponent } from './post/postpage/postpage.component';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'post/:id', component: PostpageComponent }
];

export const routerProviders = [
  provideRouter(routes)
];
