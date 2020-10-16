import {Component, OnInit} from '@angular/core';
import {TipoJustica} from "../../tipos-justica/tipo-justica";
import {Router} from "@angular/router";

@Component({
  selector: 'app-executar',
  templateUrl: './executar.component.html',
  styleUrls: ['./executar.component.scss']
})
export class ExecutarComponent implements OnInit {

  breadcrumbItens = [
    {label: 'Executar Validações', link: null}
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClick(tj: TipoJustica) {
    this.router.navigate(['/executar', tj.codigo])
  }
}
