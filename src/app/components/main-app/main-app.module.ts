import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from 'src/app/app.component';
import { AddTaskComponent } from '../add-task/add-task.component';
import { ButtonComponent } from '../button/button.component';

import { HeaderComponent } from '../header/header.component';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavlinkComponent } from '../navlink/navlink.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TasksComponent } from '../tasks/tasks.component';
import { MainAppComponent } from './main-app.component';

@NgModule({
    imports: [
        BrowserModule,
        FontAwesomeModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        MainAppComponent, 
        NavbarComponent, 
        NavlinkComponent,
        // to move to App Module
        LoginPopupComponent, 
        HeaderComponent, 
        TasksComponent,
        ButtonComponent,
        TaskItemComponent,
        AddTaskComponent
    ],

    bootstrap: [MainAppComponent]
  })
  export class MainAppModule{ }