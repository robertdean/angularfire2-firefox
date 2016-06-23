import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyDy8ok5dnvyD2JBnL9OHtD1SilmTMoiAUw',
    authDomain: 'angularfire2-firefox.firebaseapp.com',
    databaseURL: 'https://angularfire2-firefox.firebaseio.com',
    storageBucket: 'angularfire2-firefox.appspot.com'
  }),
  firebaseAuthConfig({
    method: AuthMethods.Popup,
    remember: 'default'
  })
];
