import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {BreadcrumbService} from './breadcrumb/breadcrumb.service';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  declarations: [MainMenuComponent],
  exports: [MainMenuComponent],
  imports: [BreadcrumbModule, CommonModule, MenuModule, MenubarModule],
  providers: [BreadcrumbService]
})
export class LayoutModule {
}
