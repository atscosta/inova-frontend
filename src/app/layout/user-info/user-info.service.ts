import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {urls} from '../../../environments/environment';
import {UserInfo} from './user-info';
import {EMPTY, Observable} from 'rxjs';
import {InitialAuthService} from '../../auth/initial-auth.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private rgpCoreUrl: string;

  constructor(
    private authService: InitialAuthService,
    private http: HttpClient) {
    this.rgpCoreUrl = urls.rgpCore;
  }

  getUserInfo(): Observable<UserInfo> {
    const decodedIDToken = this.authService.decodedIDToken();
    if (decodedIDToken && decodedIDToken.sub) {
      const params = new HttpParams().append('cpf', decodedIDToken.sub);
      return this.http.get<UserInfo>(`${this.rgpCoreUrl}/servidores`, {params})
        .pipe(tap(result => result.roles = this.authService.roles()));
    } else {
      return EMPTY;
    }
  }
}
