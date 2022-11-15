import { Component, OnInit } from '@angular/core';
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

  constructor(private navlinkService : NavlinkService) { }

  ngOnInit(): void {
    this.navlinkService.getNavlinks().subscribe((links) => (this.navlinks = links));
    console.log(this.navlinks);
  }

}
