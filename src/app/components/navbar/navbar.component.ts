import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Navlink } from "../../Navlink";
import { NavlinkService } from "../../services/navlink.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title : string = "Task Manager";
  navlinks : Navlink[] = [];
  loggedIn : boolean = false; // TODO recieve this info from an appropriate service that handles it

  constructor(private navlinkService : NavlinkService, private uiService: UiService) { }

  ngOnInit(): void {
    this.navlinkService.getNavlinks().subscribe((links) => (this.navlinks = links));
    console.log(this.navlinks);
  }

  toggleLoginPopup(){
    this.uiService.toggleLoginPopup();
  }
}
