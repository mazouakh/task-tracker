import { Component, OnInit } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  isAlreadyMember : boolean = false;
  subscription: Subscription;

  constructor(private registerService: RegisterService) {
    this.subscription = registerService.onSetIsAlreadyMember().subscribe((value: boolean) => (this.isAlreadyMember = value))
   }

  ngOnInit(): void {
  }

}
