import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {AuthConfig, OAuthService} from 'angular-oauth2-oidc';
import {JwksValidationHandler} from 'angular-oauth2-oidc-jwks';
import {auth, environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InitialAuthService {

  private production: boolean;
  private publicRoutes: string;
  private siglaSistema: string;

  private jwtHelper: JwtHelperService;

  constructor(
    private oauthService: OAuthService,
    private authConfig: AuthConfig) {
    this.production = environment.production;
    this.publicRoutes = environment.publicRoutes;
    this.siglaSistema = auth.siglaSistema;
    this.jwtHelper = new JwtHelperService();
  }

  decodedAccessToken() {
    return this.jwtHelper.decodeToken(this.oauthService.getAccessToken());
  }

  idToken() {
    return this.oauthService.getIdToken();
  }

  decodedIDToken() {
    return this.jwtHelper.decodeToken(this.oauthService.getIdToken());
  }

  roles(): string[] {
    return this.decodedIDToken().roles[this.siglaSistema];
  }

  containsRole(role: string): boolean {
    return this.roles().indexOf(role.toUpperCase()) >= 0;
  }

  containsAnyRoles(roles: string[]): boolean {
    return roles.filter(r => this.containsRole(r)).length > 0;
  }

  logout() {
    this.oauthService.logOut();
  }

  async initAuth(redirectUri?: string): Promise<any> {
    this.production || console.log('>>> InitialAuthService#initAuth :: redirectUri', redirectUri);

    if (window.location.href.startsWith(this.publicRoutes)) {
      this.production || console.log('>>> InitialAuthService#initAuth :: publicRoute');
      return null;
    }

    return new Promise((resolveFn, rejectFn) => {
      if (redirectUri) {
        this.authConfig.redirectUri = redirectUri;
      }

      this.production || console.log('>>> InitialAuthService#initAuth :: setting up oauthService');
      this.oauthService.configure(this.authConfig);
      this.oauthService.setStorage(localStorage);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();

      this.production || console.log('>>> InitialAuthService#initAuth :: logging in');
      this.oauthService.loadDiscoveryDocumentAndLogin().then(isLoggedIn => {
        if (isLoggedIn) {
          this.production || console.log('>>> InitialAuthService#initAuth :: user already logged in');
          this.oauthService.setupAutomaticSilentRefresh();
          resolveFn();
        } else {
          this.production || console.log('>>> InitialAuthService#initAuth :: initializing implicit flow');
          this.oauthService.initImplicitFlow();
          rejectFn();
        }
      }).catch(e => console.error('Falha ao redirecionar para o servidor do CAS', e));
    });
  }
}
