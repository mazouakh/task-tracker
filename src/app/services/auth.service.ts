import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { User } from '../Interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Toggle between signup & login forms
  private isAlreadyMemberLinkClicked : boolean = false;
  private subject = new Subject<any>();

  constructor(private http:HttpClient) { }

  setIsAlreadyMember(value : boolean){
    this.isAlreadyMemberLinkClicked = value;
    this.subject.next(this.isAlreadyMemberLinkClicked);
  }

  onSetIsAlreadyMember(){
    return this.subject.asObservable();
  }
  // End toggle between signup & login forms


  private apiUrl = "http://localhost:5000/users";
  private headers : HttpHeaders= new HttpHeaders()
  .set("Content-Type", "application/json");

  // get a user
  getUser(user: User): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl+"?email="+user.email, {'headers': this.headers});
  }

  // get a user by email
  getUserByEmail(email: string): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl+"?email="+email, {'headers': this.headers});
  }

  // add a new user
  addUser(user: User): Observable<User>{
    return this.http.post<User>(this.apiUrl, user, {'headers': this.headers});
  }
}
