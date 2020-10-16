import {Component, OnInit} from '@angular/core';
import {TipoJustica} from "../../tipos-justica/tipo-justica";
import {Router} from "@angular/router";

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {

  breadcrumbItens = [
    {label: 'Resultados e Estatísticas', link: null},
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClick(tj: TipoJustica) {
    this.router.navigate(['/resultados', tj.codigo]);
  }
}
