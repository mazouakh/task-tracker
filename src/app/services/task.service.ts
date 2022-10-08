import { Injectable } from '@angular/core';
import { Tasks } from "../mock-tasks";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor() { }

  // function that retuns the list of mock tasks as an observable
  getTask(){
    const tasks = of(Tasks)
    return tasks;
  }
}
