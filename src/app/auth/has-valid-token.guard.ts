import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';
import {InitialAuthService} from './initial-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasValidTokenGuard implements CanActivate, CanLoad {

  constructor(
    private authService: OAuthService,
    private initialAuthService: InitialAuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkAndInitAuth(window.location.href);
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkAndInitAuth(window.location.href);
  }

  private checkAndInitAuth(redirectUri?: string): boolean {
    const authenticated = this.authService.hasValidAccessToken();
    if (!authenticated) {
      this.initialAuthService.initAuth(redirectUri);
    }
    return authenticated;
  }
}
