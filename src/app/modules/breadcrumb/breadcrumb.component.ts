import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-my-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {

  @Input()
  breadcrumbItens: {
    label: string;
    link: string | string[] | null;
  }[];

  constructor() {
  }
}
