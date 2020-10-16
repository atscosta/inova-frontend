import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OAuthService} from 'angular-oauth2-oidc';
import {environment} from '../../../environments/environment';

@Injectable()
export class IdTokenInterceptor implements HttpInterceptor {

  static TOKEN_HEADER = 'Authorization';
  static TOKEN_PREFIX = 'Bearer ';
  static BYPASS: string[] = [
    // Adicione aqui a lista de urls para as quais não se aplica o interceptor.
  ];

  private production: boolean;

  constructor(private authService: OAuthService) {
    this.production = environment.production;
  }

  static bypass(req: HttpRequest<any>) {
    for (const bypassUrl of IdTokenInterceptor.BYPASS) {
      if (req.url.startsWith(bypassUrl)) {
        return true;
      }
    }
    return false;
  }

  static cloneExistentHeaders(req: HttpRequest<any>, headerSettings: { [p: string]: string | string[] }) {
    for (const key of req.headers.keys()) {
      headerSettings[key] = req.headers.getAll(key);
    }
  }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.production || console.log('>>> IdTokenInterceptor#intercept');

    const headerSettings: { [name: string]: string | string[]; } = {};
    IdTokenInterceptor.cloneExistentHeaders(req, headerSettings);
    this.addIdTokenHeader(req, headerSettings);
    const newHeaders = new HttpHeaders(headerSettings);

    !this.production && console.log('>>> IdTokenInterceptor#intercept :: token', newHeaders.get(IdTokenInterceptor.TOKEN_HEADER));
    const newRequest = req.clone({headers: newHeaders});

    !this.production && console.log('>>> IdTokenInterceptor#intercept :: newRequest', newRequest);
    return next.handle(newRequest);
  }

  private addIdTokenHeader(req: HttpRequest<any>, headerSettings: { [p: string]: string | string[] }) {
    const token = this.authService.hasValidIdToken() ? this.authService.getIdToken() : undefined;
    if (token && !IdTokenInterceptor.bypass(req)) {
      headerSettings[IdTokenInterceptor.TOKEN_HEADER] = token.startsWith(IdTokenInterceptor.TOKEN_PREFIX) ?
        token : (IdTokenInterceptor.TOKEN_PREFIX + token);
    }
  }
}
