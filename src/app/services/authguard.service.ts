import { Injectable } from '@angular/core';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { UserService } from './user.service';
import { JwtService } from '../shared/jwt.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router:Router, private userService: UserService, private jwtService: JwtService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const token = this.jwtService.getToken();
    const user = this.userService.getCurrentUser();
    let isLoggedIn = false;
    let payload;

    if(token){
      payload = token.split('.')[1];
      payload = window.atob(payload);
      //console.log(payload);
      isLoggedIn = true;
    }
    //  User subject may get lost on refresh so need to reset auth
    if(!user.id && token){
      this.userService.refreshAuth(payload);
      isLoggedIn = true;
    }else{
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      isLoggedIn = false;
    }
    return isLoggedIn;
    //console.log(this.userService.getCurrentUser());
    //return this.userService.isAuthenticated.take(1).map(isAuth=> isAuth);
    // if (localStorage.getItem('currentUser')) {
    //     return true;
    // }
    // // not logged in so redirect to login page with the return url
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    // return false;
  }

}
