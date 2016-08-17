import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { GlobalComponent, environment } from './app/';
import { routerProviders } from './app/app.routes';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';
import { disableDeprecatedForms, provideForms, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';
import { PLATFORM_DIRECTIVES } from '@angular/core';

if (environment.production) {
  enableProdMode();
}
enableProdMode();
bootstrap(GlobalComponent, [ routerProviders,
  disableDeprecatedForms(),
  provideForms(),
  {
    provide: PLATFORM_DIRECTIVES,
    useValue: [REACTIVE_FORM_DIRECTIVES],
    multi: true
  },
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: "AIzaSyBj0ZjHAH-nFEInOQpFTGuVni67zEJ8lHM",
    authDomain: "postmemo-c6c70.firebaseapp.com",
    databaseURL: "https://postmemo-c6c70.firebaseio.com",
    storageBucket: "postmemo-c6c70.appspot.com",
  })]);

