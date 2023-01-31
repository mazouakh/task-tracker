import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavlinkComponent } from './navlink/navlink.component';
import { HamburgerPopupComponent } from './hamburger-popup/hamburger-popup.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavlinkComponent,
    HamburgerPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
  ]
})
export class NavbarModule { }
