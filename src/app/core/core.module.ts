import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IdTokenInterceptor} from './interceptors/id-token.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    IdTokenInterceptor,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: IdTokenInterceptor,
    //   multi: true
    // },
  ]
})
export class CoreModule {
}
