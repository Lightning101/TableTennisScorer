import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControllerGaurdService implements CanActivate {
  

  constructor(private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    
    if (window.location.href.match(/(localhost|127.0.0.1)/))
    {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
