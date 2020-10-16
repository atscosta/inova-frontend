import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {NavigationStart, Router} from '@angular/router';
import {BreadcrumbService} from './layout/breadcrumb/breadcrumb.service';
import {filter} from 'rxjs/operators';
import {accessGranted, mainMenuItems} from './main-menu-items';
import {InitialAuthService} from './auth/initial-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'CNJ Inova';
  version = '1.0.0';
  sidebarOpen = true;
  menuItems: MenuItem[] = [
    {label: 'Executar Validações', icon: 'pi pi-fw pi-check-square', routerLink: '/executar'},
    {label: 'Resultados / Estatísticas', icon: 'pi pi-fw pi-chart-bar', routerLink: '/resultados'},
  ];

  constructor(
    private authService: InitialAuthService,
    private router: Router,
    private breadcrumbService: BreadcrumbService
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      this.breadcrumbService.reset();
    });
  }

  get logo() {
    return '../assets/img/' + (this.sidebarOpen ? 'logo.svg' : 'logo-sm.svg');
  }

  get breadcrumbItems() {
    return this.breadcrumbService.getItems();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit() {
    this.menuItems = mainMenuItems.filter(item => accessGranted(item, this.authService.roles()));
    if (window.matchMedia('(min-width: 992px)').matches) {
      this.sidebarOpen = true;
    }
  }
}
