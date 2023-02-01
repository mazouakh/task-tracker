import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-popup',
  templateUrl: './hamburger-popup.component.html',
  styleUrls: ['./hamburger-popup.component.css']
})
export class HamburgerPopupComponent implements OnInit {

  @Output() logoutEvent: EventEmitter<any> = new EventEmitter()
  @Input() userName: string = "Inconnue";


  constructor() { }

  ngOnInit(): void {
  }

  logout(){
    this.logoutEvent.emit();
  }

}
