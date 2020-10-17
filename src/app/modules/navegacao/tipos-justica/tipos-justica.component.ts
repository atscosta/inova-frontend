import {Component, OnInit} from '@angular/core';
import {TipoJustica} from "../../tipos-justica/tipo-justica";
import {Router} from "@angular/router";

@Component({
  selector: 'tipos-justica',
  templateUrl: './tipos-justica.component.html',
  styleUrls: ['./tipos-justica.component.scss']
})
export class TiposJusticaComponent implements OnInit {

  breadcrumbItens = [
    {label: 'Resultados e Estatísticas', link: null},
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClick(tj: TipoJustica) {
    this.router.navigate(['/tipos-justica', tj.codigo, 'tribunais']);
  }
}
