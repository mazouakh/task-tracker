import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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


  title : string = "Task Manager";
  navlinks : Navlink[] = [];
  displayPopup!: boolean; // for displaying the hamburger menu popup
  
  // Info Utilisateur
  loggedIn! : boolean;
  userNom: string = "Doe";
  userPrenom: string = "John";

  constructor(
    private navlinkService : NavlinkService, 
    private uiService: UiService, 
    private authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {

    if (this.isLoggedIn()) {
      this.navlinkService.getNavlinks().subscribe((links) => (this.navlinks = links));
      this.getUserName();
    }else{
      this.navlinkService.getGuestNavlinks().subscribe((links) => (this.navlinks = links));
    }

  }

  
  logout(){
    this.authService.clearLocalStorage();
    this.router.navigate(['/']);
  }

  toggleLoginPopup(){
    this.uiService.toggleLoginPopup();
  }

  toggleHambergerPopup(){
    this.displayPopup = !this.displayPopup;
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  getUserName(){
    const logedinUserEmail = localStorage.getItem('email');

    if (logedinUserEmail == null) {
      console.log("didn't get any loggedin user");
      return;
    }
    
    this.authService.getUserByEmail(logedinUserEmail).subscribe((user) => {
      this.userNom = user[0].nom;
      this.userPrenom = user[0].prenom;
    });
  }
}
