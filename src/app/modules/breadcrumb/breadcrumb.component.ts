import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit{

  @Input()
  breadcrumbItens: {
    label: string;
    link: string | string[] | null;
  }[];

  constructor() {
  }

  ngOnInit(): void {
    console.log('>>> BreadcrumbComponent', this.breadcrumbItens);
  }
}
