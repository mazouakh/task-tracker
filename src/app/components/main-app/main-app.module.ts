import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppModule } from 'src/app/app.module';
import { AuthGuard } from "../../guards/auth.guard";

import { AddTaskComponent } from '../tasks/add-task/add-task.component';
import { ButtonComponent } from '../tasks/button/button.component';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from '../tasks/header/header.component';
import { LandingPageComponent } from '../guest-app/landing-page/landing-page.component';
import { LoginPopupComponent } from '../auth-forms/login-popup/login-popup.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavlinkComponent } from '../navbar/navlink/navlink.component';
import { TaskItemComponent } from '../tasks/task-item/task-item.component';
import { TasksComponent } from '../tasks/tasks.component';
import { MainAppComponent } from './main-app.component';
import { AuthFormsModule } from '../auth-forms/auth-forms.module';
import { TasksModule } from '../tasks/tasks.module';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
    imports: [
        BrowserModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule,
        TasksModule,
        NavbarModule,
    ],
    declarations: [
        MainAppComponent, 
    ],
    exports:[],
    providers:[AuthGuard],

    bootstrap: [MainAppComponent]
  })
  export class MainAppModule{ }