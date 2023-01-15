import { Injectable } from '@angular/core';
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private isAlreadyMember : boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  setIsAlreadyMember(value : boolean){
    this.isAlreadyMember = value;
    this.subject.next(this.isAlreadyMember);
  }

  onSetIsAlreadyMember(){
    return this.subject.asObservable();
  }
}
