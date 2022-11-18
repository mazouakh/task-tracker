import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showLoginPopup : boolean = false;
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  private subject_login = new Subject<any>();


  constructor() { }

  toggleAddTask(){
    this.showAddTask = ! this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(){
    return this.subject.asObservable();
  }

  toggleLoginPopup(){
    this.showLoginPopup = !this.showLoginPopup;
    this.subject_login.next(this.showLoginPopup);
  }

  onLoginToggle(){
    return this.subject_login.asObservable();
  }
}
