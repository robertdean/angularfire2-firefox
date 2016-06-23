import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

// firebase
import { FIREBASE_APP_PROVIDERS } from './config';

// root component
import { App } from './app';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


bootstrap(App, [
  FIREBASE_APP_PROVIDERS
]).catch((error: Error) => console.error(error));
