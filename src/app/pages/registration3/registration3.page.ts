import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'
import { environment } from 'src/environments/environment';
import { MustMatch } from './must-match.validator'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  hide = true;
  submitted = false;
  emailError;
  nameError;
  passwordError;

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmpassword: new FormControl('', Validators.required),
    email: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]))
  }, MustMatch('password', 'confirmpassword'));

  get emailInput() {
    return this.signupForm.get('email')
  }
  get passwordInput() {
    return this.signupForm.get('password')
  }
  get nameInput() {
    return this.signupForm.get('name')
  }


  constructor(private _router: Router,
              private _authService: AuthService
              ) {}

 
  //TODO instead of returning these error messages, they should appear somewhere on the frontend 
  getEmailInputError(){
    if (this.emailInput.hasError("email")){
      this.emailError = "Please enter a valid email address"
    }
    if (this.emailInput.hasError("required")){
      this.emailError = "An email address is required"
    }
  }
  getPasswordInputError(){
    if (this.passwordInput.hasError("required")){
      this.passwordError = "A password is required"
    }
  }

  shouldEnableSubmit(){
    return (
      !this.emailInput.valid ||
      !this.passwordInput.valid ||
      !this.nameInput.valid 
    )
  }

  register() {

    this.submitted = true;

    this._authService.signUp({
      email: this.emailInput.value,
      password: this.passwordInput.value,
      name: this.nameInput.value
    }).then(data => {
      environment.confirm.email = this.emailInput.value;
      environment.confirm.password = this.passwordInput.value;
      this._router.navigate(["confirm-email"]);
    }).catch(error => console.log(error))
    // console.log(environment.confirm.email)au
  
}

}