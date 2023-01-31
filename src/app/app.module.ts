import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/guest-app/register/register.component';
import { LandingPageComponent } from './components/guest-app/landing-page/landing-page.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { MainAppModule } from './components/main-app/main-app.module';
import { SignupFormComponent } from './components/auth-forms/signup-form/signup-form.component';
import { LoginFormComponent } from './components/auth-forms/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavlinkComponent } from './components/navbar/navlink/navlink.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { LoginPopupComponent } from './components/auth-forms/login-popup/login-popup.component';
import { AuthFormsModule } from './components/auth-forms/auth-forms.module';
import { GuestAppModule } from './components/guest-app/guest-app.module';
import { NavbarModule } from './components/navbar/navbar.module';

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'auth', component: RegisterComponent},
  {path: 'app', component: MainAppComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MainAppModule,
    AuthFormsModule,
    GuestAppModule,
    NavbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[],
  providers:[AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
