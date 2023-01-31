import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TasksComponent,
    TaskItemComponent,
    HeaderComponent,
    ButtonComponent,
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [
    TasksComponent,
    HeaderComponent,
  ]
})
export class TasksModule { }
