import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { Navlink } from "../../Interfaces/Navlink";
import { NavlinkService } from "../../services/navlink.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() logoutEvent: EventEmitter<any> = new EventEmitter()

  title : string = "Task Manager";
  navlinks : Navlink[] = [];
  loggedIn : boolean = false; // TODO recieve this info from an appropriate service that handles it

  constructor(
    private navlinkService : NavlinkService, 
    private uiService: UiService, 
    private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.navlinkService.getNavlinks().subscribe((links) => (this.navlinks = links));
    }else{
      this.navlinkService.getGuestNavlinks().subscribe((links) => (this.navlinks = links));
    }

    this.loggedIn = this.authService.isLoggedIn();
  }

  toggleLoginPopup(){
    this.uiService.toggleLoginPopup();
  }

  logout(){
    this.logoutEvent.emit();
  }
}
