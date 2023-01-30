import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MainAppComponent } from './components/main-app/main-app.component';
import { MainAppModule } from './components/main-app/main-app.module';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavlinkComponent } from './components/navlink/navlink.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'app', component: MainAppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    SignupFormComponent,
    LoginFormComponent,
    // LoginPopupComponent,
    // LandingPageComponent,
    // NavbarComponent,
    // NavlinkComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    MainAppModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
