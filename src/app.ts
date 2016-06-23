import { Component } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState } from 'angularfire2';


@Component({
  selector: 'app',
  template: `
    <h1>Authenticated: {{!!authState}}</h1>
    <h2>UID: {{authState && authState.uid}}</h2>
    
    <div>
      <button (click)="signInWithGithub()" type="button">GitHub</button>
      <button (click)="signInWithGoogle()" type="button">Google</button>
      <button (click)="signInWithTwitter()" type="button">Twitter</button>
      <button (click)="signOut()" type="button">Sign out</button>
    </div>
  `
})

export class App {
  authState: FirebaseAuthState = null;

  constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({provider})
      .catch(error => console.error('ERROR @ signIn() :', error));
  }

  signInWithGithub(): void {
    this.signIn(AuthProviders.Github);
  }

  signInWithGoogle(): void {
    this.signIn(AuthProviders.Google);
  }

  signInWithTwitter(): void {
    this.signIn(AuthProviders.Twitter);
  }

  signOut(): void {
    this.auth$.logout();
  }
}
