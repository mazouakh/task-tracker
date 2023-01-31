import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from "rxjs";
import { User } from '../Interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private router:Router) { }


  // Create local storage with user data
  login(user:User){
    localStorage.setItem('isLoggedIn','true');    
    localStorage.setItem('email', user.email);
    this.router.navigate(['/app']);     
  }

  // Clear the local storage on logout
  clearLocalStorage() :void {    
    localStorage.setItem('isLoggedIn','false');    
    localStorage.removeItem('email');    

  } 

  // check if logged in
  isLoggedIn(){
    return (localStorage.getItem('isLoggedIn') == 'true');
  }


  // Restful API

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

  // End Restful API
}
