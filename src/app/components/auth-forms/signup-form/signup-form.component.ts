import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/Interfaces/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  @Output() displayLoginForm : EventEmitter<boolean> = new EventEmitter<boolean>();

  // Form Data
  nom!: string;
  prenom!: string;
  email!: string;
  password!: string;
  passConfirm!: string;

  passMismatch : boolean = false;
  alreadyRegistered : boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // verifier que les deux mot de pass correspendent
    if (this.passConfirm != this.password) {
      this.passMismatch = true;
      return;
    }
    this.passMismatch = false;

    // creating a User instance with the form values
    const user : User = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password
    };

    this.registerUser(user);
  }


  showLoginForm(){
    this.displayLoginForm.emit(true);
    // this.authService.setIsAlreadyMember(true);
  }

  registerUser(user:User){
    // First check if user already registered
    this.authService.getUser(user).subscribe((userFound) => {
      if (userFound.length > 0) {
        console.log("already registered");
        console.log("userFound : ", userFound);
        this.alreadyRegistered = true;
        return;
      }
      // If not then register the new user
      this.alreadyRegistered = false;
      this.authService.addUser(user).subscribe(() => {
        
        // Log him in
        this.authService.login(user)
      });

    });
    
  }


}
