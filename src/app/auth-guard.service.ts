import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  

  constructor(private authService: AuthServiceService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot,   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any{

return this.authService.isAuthenticated()

.then((authenticated) => {
  if (authenticated) {
   return true;
  } 
  else {
   this.router.navigate(['/']);
   return
 }
 });
}

canActivateChild(route: ActivatedRouteSnapshot, 

  state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

return this.canActivate(route, state);

}


}
