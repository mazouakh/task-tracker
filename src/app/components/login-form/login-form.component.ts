import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // Attributes
  email!: string;
  password!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.login();
  }

  
  isPasswordInCorrect: boolean = false;
  isUserUnfound: boolean = false;

  login(){
    this.authService.getUserByEmail(this.email).subscribe((userFound) => {
      
      if (userFound.length == 0) {
        this.isUserUnfound = true;
        this.isPasswordInCorrect = false;
        return;
      }
      
      this.isUserUnfound = false;
      if (userFound[0].password === this.password) {
        this.isPasswordInCorrect = false;
        // TODO Login in

      }else{
        this.isPasswordInCorrect = true;
      }
    });
  }
  
  showSigninForm(){
    this.authService.setIsAlreadyMember(false);
  }
}
