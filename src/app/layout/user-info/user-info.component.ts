import {Component, OnInit} from '@angular/core';
import {urls} from '../../../environments/environment';
import {UserInfoService} from './user-info.service';
import {UserInfo} from './user-info';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  private urlRgpCore: string;

  userInfo: UserInfo;
  menuItems: MenuItem[];

  constructor(private userInfoService: UserInfoService) {
    this.urlRgpCore = urls.rgpCore;
  }

  get foto() {
    return (this.userInfo && this.userInfo.matricula) ?
      `${this.urlRgpCore}/servidores/${this.userInfo.matricula}/foto` :
      'assets/img/user-placeholder.svg';
  }

  ngOnInit() {
    this.userInfoService.getUserInfo()
      .subscribe(result => {
        console.log('>>> result', result);
        (this.userInfo = result) && this.initMenuItems();
      });
  }

  private initMenuItems() {
    this.menuItems = [];
    this.menuItems.push({label: this.userInfo.nome});
    this.menuItems.push({separator: true});
    this.userInfo.roles.forEach(role => this.menuItems.push({label: role, styleClass: 'role'}));
    this.menuItems.push({separator: true});
    this.menuItems.push({label: 'Preferências'});
    this.menuItems.push({label: 'Alterar Senha'});
    this.menuItems.push({separator: true});
    this.menuItems.push({label: 'Sair'});
  }
}
