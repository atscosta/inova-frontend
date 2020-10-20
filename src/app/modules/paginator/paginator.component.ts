import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input()
  numTotal: any;

  @Input()
  pageSize: any;

  @Input()
  currentPage: number;

  @Output()
  onChange = new EventEmitter<any>();

  getNumPages() {
    return Math.ceil(this.numTotal / this.pageSize);
  }

  next() {
    if (this.currentPage < this.getNumPages() - 1) {
      this.currentPage++;
      this.onChange.emit(this.currentPage);
    }
  }

  previous() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.onChange.emit(this.currentPage);
    }
  }
}
