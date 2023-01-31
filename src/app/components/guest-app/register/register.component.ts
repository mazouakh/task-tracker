import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
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
    this.subscription = this.onSetIsAlreadyMember().subscribe((value: boolean) => (this.isAlreadyMemberLinkClicked = value))
   }

   ngOnInit(): void {
  }

   // Toggle between signup & login forms
  private subject = new Subject<any>();


  setIsAlreadyMember(value : boolean){
    // this.isAlreadyMemberLinkClicked = value;
    console.log("setIsAlreadyMember", value);
    this.subject.next(value);
  }

  onSetIsAlreadyMember(){
    return this.subject.asObservable();
  }

  // End toggle between signup & login forms


}
