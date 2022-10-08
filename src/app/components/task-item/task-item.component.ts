import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../Task';  // The Task Interface
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task! : Task;  // Task element passed as input from the Tasks component
  
  faTimes = faTimes;  // tying the icon to a property in our component class

  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
