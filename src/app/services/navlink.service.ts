import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Navlink } from "../Interfaces/Navlink";

@Injectable({
  providedIn: 'root'
})
export class NavlinkService {

  private apiUrl = "http://localhost:5000/navlinks";
  private apiGuestUrl = "http://localhost:5000/guest-navlinks"

  constructor(private http:HttpClient) { }

  getNavlinks(): Observable<Navlink[]>{
    return this.http.get<Navlink[]>(this.apiUrl);
  }

  getGuestNavlinks(){
    return this.http.get<Navlink[]>(this.apiGuestUrl);
  }

}
