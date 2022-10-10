import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from "../../Task";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter<Task>();

  // Creating properties for form fields
  text!: string;
  day!: string;
  reminder: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    // check that the form is not empty
    if(!this.text){
      alert("You must add a task title!")
      return;
    }
    if(!this.day){
      alert("You must add a date!")
      return
    }

    // create a new task with the curent form values
    const newTask={
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    //TODO emit an event
    this.onAddTask.emit(newTask);

    // reset the form values to default
    this.text = "";
    this.day = "";
    this.reminder = false;
  }

}
