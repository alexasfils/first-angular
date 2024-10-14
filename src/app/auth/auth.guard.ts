import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild{

  constructor(private authService: AuthService) {}
//da la possibilita di attivare un elemento, ad esempio contatti
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return this.authService.isAuthenticated();
  }
//da la possibilita di attivare/disattivare elemento figlio
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.authService.isRoleAdmin();
  }
  }
