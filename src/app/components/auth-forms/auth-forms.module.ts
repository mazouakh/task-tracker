import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent,
    LoginPopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginFormComponent,
    LoginPopupComponent
  ]
})
export class AuthFormsModule { }
