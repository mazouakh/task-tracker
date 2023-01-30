import { Component, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  isAlreadyMemberLinkClicked : boolean = false;
  subscription: Subscription;

  constructor(private authService: AuthService) {
    this.subscription = authService.onSetIsAlreadyMember().subscribe((value: boolean) => (this.isAlreadyMemberLinkClicked = value))
   }

  ngOnInit(): void {
  }

}
