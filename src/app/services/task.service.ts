import { Injectable } from '@angular/core';
import { Task } from "../Interfaces/Task";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";
  
  
  private headers : HttpHeaders= new HttpHeaders()
  .set("Content-Type", "application/json");


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
