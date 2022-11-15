import { Component, Input, OnInit } from '@angular/core';
import { Navlink } from "../../Navlink";
import { faCalendar, faNoteSticky, faChartLine, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { NavlinkService } from "../../services/navlink.service";
@Component({
  selector: 'app-navlink',
  templateUrl: './navlink.component.html',
  styleUrls: ['./navlink.component.css']
})
export class NavlinkComponent implements OnInit {

  // navlinks : Navlink[] = [];
  @Input() navlink! : Navlink;

  faCalendar = faCalendar;
  faNoteSticky = faNoteSticky;
  faChartLine = faChartLine;
  faCertificate = faCertificate;

  constructor() { }

  ngOnInit(): void { }

}
