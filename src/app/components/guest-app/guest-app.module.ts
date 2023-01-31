import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { AuthFormsModule } from '../auth-forms/auth-forms.module';
import { NavbarModule } from '../navbar/navbar.module';



@NgModule({
  declarations: [
    LandingPageComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    AuthFormsModule,
    NavbarModule,
  ],
  exports:[
    LandingPageComponent,
    RegisterComponent,
  ]
})
export class GuestAppModule { }
