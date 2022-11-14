import { Component, OnInit } from '@angular/core';
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Tasks Tracker';
  showAddTask : boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = uiService.onToggle().subscribe((value: boolean) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask(): void{
    this.uiService.toggleAddTask();
  }
}
