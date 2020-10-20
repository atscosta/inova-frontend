import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OAuthModule, OAuthService} from 'angular-oauth2-oidc';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OAuthModule.forRoot()
  ],
  providers: [
    OAuthService,
  ]
})
export class AuthModule {
}
