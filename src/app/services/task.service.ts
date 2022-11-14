import { Injectable } from '@angular/core';
import { Task } from "../Task";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";
  
  // TODO trying to use remote json server
  // private apiUrl = "https://my-json-server.typicode.com/mazouakh/task-tracker/tasks";
  // private apiUrl = "https://api.jsonbin.io/v3/b/6348881e0e6a79321e278e35/latest";
  
  private headers : HttpHeaders= new HttpHeaders()
  .set("Content-Type", "application/json");
  // .set("X-Bin-Meta", "false")
  // .set('X-JSON-Path', '$..tasks[*]');


  constructor(private http:HttpClient) { }

  // function that retuns the list of mock tasks as an observable
  getTask(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl, {'headers': this.headers});
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url, {'headers': this.headers});
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task, {'headers': this.headers});
  }

  // TODO trying to update remote json
  toggleReminder(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;

    const headers : HttpHeaders= new HttpHeaders()
    .set("Content-Type", "application/json");
    // .set('X-JSON-Path', '$..tasks['+task.id+']');
    // console.log(headers);
    return this.http.put<Task>(url, task, {'headers': headers})
    // return this.http.put<Task>(this.apiUrl, task, {'headers': headers})
  }

}
