import { Component, Input, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { Tasks } from "../../mock-tasks";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = Tasks;
  
  constructor() { }

  ngOnInit(): void {
  }

}
