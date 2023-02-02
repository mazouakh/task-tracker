import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  // Attributes
  @Output() displaySignupForm: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  // Form Values
  email!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.clearLocalStorage();
  }

  onSubmit() {
    this.login();
  }

  isPasswordInCorrect: boolean = false;
  isUserUnfound: boolean = false;

  login() {
    this.authService.getUserByEmail(this.email).subscribe((userFound) => {
      console.log('logging in...');
      if (userFound.length == 0) {
        this.isUserUnfound = true;
        this.isPasswordInCorrect = false;
        return;
      }

      this.isUserUnfound = false;
      if (userFound[0].password === this.password) {
        this.isPasswordInCorrect = false;
        // Login in
        this.authService.login(userFound[0]);
      } else {
        this.isPasswordInCorrect = true;
      }
    });
  }

  showSigninForm() {
    this.displaySignupForm.emit(true);
  }
}
