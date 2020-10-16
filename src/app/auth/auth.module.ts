import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthConfig, OAuthModule, OAuthService} from 'angular-oauth2-oidc';
import {InitialAuthService} from './initial-auth.service';
import {auth} from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OAuthModule.forRoot()
  ],
  providers: [
    OAuthService,
    InitialAuthService,
    {
      provide: AuthConfig,
      useValue: auth.config
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (initialAuthService: InitialAuthService) => () => initialAuthService.initAuth(),
    //   deps: [InitialAuthService],
    //   multi: true
    // }
  ]
})
export class AuthModule {
}
