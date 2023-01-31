import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../Interfaces/Task';  // The Task Interface
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task! : Task;  // Task element passed as input from the Tasks component
  @Output() btnDelete: EventEmitter<Task>= new EventEmitter<Task>();
  @Output() btnToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  
  faTimes = faTimes;  // tying the icon to a property in our component class

  constructor() { 
  }

  ngOnInit(): void {
    
  }
  deleteTask(){
    this.btnDelete.emit(this.task);
  }
  toggleReminder(){
    this.btnToggleReminder.emit(this.task);
  }
}
