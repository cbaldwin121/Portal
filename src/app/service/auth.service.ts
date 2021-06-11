import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { CognitoUser } from 'amazon-cognito-identity-js'
import { setUncaughtExceptionCaptureCallback } from 'process';
import { Hub } from 'aws-amplify';



export interface NewUser {
  email: string,
  password: string,
  name: string, 
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public loggedIn: boolean;
  private _authState: Subject<CognitoUser|any> = new Subject<CognitoUser|any>();
  authState: Observable<CognitoUser|any> = this._authState.asObservable();

  public static SIGN_IN = 'signIn';
  public static SIGN_OUT = 'signOut';

  constructor() {   // no clue what any of this means, I should learn!
    Hub.listen('auth', (data)=> {
      const {channel, payload } = data;
      if (channel == 'auth'){
        this._authState.next(payload.event);
      }
    });
   }

   signUp(user: NewUser): Promise<CognitoUser|any>{
     return Auth.signUp({
       "username":user.email,
       "password": user.password,
       "attributes":{
         "email":user.email,
         "name": user.name,
       }
     });
   }

   signIn(username: string, password: string):Promise<CognitoUser|any> {
     return new Promise((resolve, reject) => {
       Auth.signIn(username, password).then((user: CognitoUser|any)=> {
         this.loggedIn = true;
         resolve(user);
       }).catch((error: any) => reject(error));
     });
   }

   signOut(): Promise<any> {
     return Auth.signOut().then(() => this.loggedIn = false)
   }

}