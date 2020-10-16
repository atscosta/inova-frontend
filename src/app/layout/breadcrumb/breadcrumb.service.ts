import {Injectable} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private items: MenuItem[] = [];

  constructor() {
  }

  public getItems() {
    return this.items;
  }

  public reset() {
    this.items = [{
      label: 'Início',
      routerLink: 'home'
    }];
    return this;
  }

  public add(item: MenuItem) {
    this.items.push(item);
    return this;
  }
}
