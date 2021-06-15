import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';

import { UserModel} from '../models/model/user.model';

import { BehaviorSubject, range } from 'rxjs';
import { take } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public name: string;
  public email: string;
  public role: string;
  public child: [];
  public team: [];
  public photo: string;
  public userId: string;



  // backend code to change a user's password
  changePassword(): Promise<CognitoUser|any>{
    return Auth.currentAuthenticatedUser()
       .then(user => {
         return Auth.changePassword(user, 'oldPassword', 'newPassword');
       })
       .then(data => console.log(data))
       .catch(err => console.log(err));
  }

  getUserName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getRole(){
    return this.role;
  }
  getChildList(){
    return 

  }


}
