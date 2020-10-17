import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {NavigationStart, Router} from '@angular/router';
import {BreadcrumbService} from './layout/breadcrumb/breadcrumb.service';
import {filter} from 'rxjs/operators';

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
    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
    {label: 'Navegação', icon: 'pi pi-fw pi-sitemap', routerLink: '/tipos-justica'},
    {label: 'Validações', icon: 'pi pi-fw pi-check-square', routerLink: ''},
  ];

  constructor(
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
    if (window.matchMedia('(min-width: 992px)').matches) {
      this.sidebarOpen = true;
    }
  }
}
