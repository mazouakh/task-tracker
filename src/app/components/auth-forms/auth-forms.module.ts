import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    LoginPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginFormComponent,
    SignupFormComponent,
    LoginPopupComponent
  ]
})
export class AuthFormsModule { }
