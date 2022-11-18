import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.css']
})
export class LoginPopupComponent {

  showLoginPopup : boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService){
    this.subscription = uiService.onLoginToggle().subscribe((value : boolean) => (this.showLoginPopup = value))
  }

  Log(x: any){
    console.log(x);
  }

  toggleLoginPopup(): void{
    this.Log("Toggeling login popup from : " + this.showLoginPopup)
    this.uiService.toggleLoginPopup();
    this.Log("To : " + this.showLoginPopup)
  }

}
