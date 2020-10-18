import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
