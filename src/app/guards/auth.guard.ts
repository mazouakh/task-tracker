import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.isLoggedIn()) {
        return true;
      }
      // navigate to register/login page
      this.route.navigate(['/auth']);
      
      return false;
  }
  
  constructor(private route:Router) {}

  public isLoggedIn(): boolean{
    return (localStorage.getItem('isLoggedIn') == "true")
  }
}
