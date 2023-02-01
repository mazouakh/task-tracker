import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { AuthFormsModule } from './components/auth-forms/auth-forms.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NavbarModule,
    AuthFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
