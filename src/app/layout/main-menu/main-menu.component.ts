import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  @Input()
  items: MenuItem[];

  @Input()
  sidebarOpen: boolean;

  constructor() {
  }

  itemClick(item: MenuItem, items: MenuItem[], event: MouseEvent) {
    const abrir = !item.expanded && ('items' in item) && (item.items.length > 0);
    const button = event.currentTarget as HTMLElement;

    // Fecha todos os itens abertos (tanto no model quanto no DOM).
    items.forEach(it => {
      it.expanded = false;
    });
    const others = button.parentElement.parentElement.children;
    Array.from<Element>(others).forEach(li => this.closeSubmenu(li));

    if (abrir) {
      // Abre o submenu to item clicado no DOM e no model.
      this.openSubmenu(button.parentElement);
      item.expanded = true;
    }
  }

  /**
   * Função auxiliar para fechar um submenu, de acordo com o estado da sidebar.
   */
  private closeSubmenu(li: Element | null): void {
    const submenu = this.getSubmenu(li);
    if (submenu) {
      if (this.sidebarOpen) {
        submenu.style.removeProperty('height');
      }
    }
  }

  /**
   * Função auxiliar para abrir um submenu, de acordo com o estado da sidebar.
   */
  private openSubmenu(li: Element | null): void {
    const submenu = this.getSubmenu(li);
    if (submenu) {
      if (this.sidebarOpen) {
        submenu.style.height = submenu.scrollHeight + 'px';
      }
    }
  }

  /**
   * Função auxiliar para pegar o submenu dentro de um item de menu.
   */
  private getSubmenu(li: Element): HTMLElement | null {
    return Array.from<Element>(li.children).find(c => c.matches('.menu-wrapper')) as HTMLElement;
  }

  ngOnInit() {
  }

}
