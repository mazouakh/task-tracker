import { Component, Input, OnInit } from '@angular/core';
import { Task } from "../../Task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = [];
  
  // passing the service as a parameter to the constructor in order to be able to use it
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    // subscribing to the observable and getting the return value (tasks) once it's loaded
    this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleTaskReminder(task: Task){
    task.reminder = ! task.reminder;
    this.taskService.toggleReminder(task).subscribe()
  }
}
