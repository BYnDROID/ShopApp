import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../model/auth.service';

@Injectable()
export class AutGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {

    if( !this.authService.authenticated ){
      this.router.navigateByUrl('/admin/auth');
      console.log("LOG IN YAP");
      console.log(this.authService.authenticated);
      return false;
    }
    console.log("LOG IN Lİ ZATEN");
    console.log(this.authService.authenticated);
    return true;

  }
}
