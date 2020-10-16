import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInfoComponent} from './user-info/user-info.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {BreadcrumbService} from './breadcrumb/breadcrumb.service';
import {UserInfoService} from './user-info/user-info.service';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [UserInfoComponent, MainMenuComponent],
  exports: [UserInfoComponent, MainMenuComponent],
  imports: [BreadcrumbModule, CommonModule, MenuModule, MenubarModule],
  providers: [BreadcrumbService, UserInfoService]
})
export class LayoutModule {
}
