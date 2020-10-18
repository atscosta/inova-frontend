import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassificacaoUnidade, TipoUnidade} from "../unidade-judiciaria";
import {ActivatedRoute} from "@angular/router";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-card-filtros-unidade-judiciaria',
  templateUrl: './card-filtros-unidade-judiciaria.component.html',
  styleUrls: ['./card-filtros-unidade-judiciaria.component.scss']
})
export class CardFiltrosUnidadeJudiciariaComponent implements OnInit {

  @Input()
  tiposUnidades: TipoUnidade[];

  @Input()
  classificacoes: ClassificacaoUnidade[];

  @Input()
  loading: boolean;

  @Input()
  numTotal: number;

  @Output()
  filtrosChanged = new EventEmitter<any>();

  codigoTribunal$: Observable<string>;

  filtros = {
    tipoUnidade: null,
    classificacao: null
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.codigoTribunal$ = this.route.params
      .pipe(
        map(params => params['codigoTribunal']),
        tap(codigoTribunal => console.log('>>> codigoTribunal', codigoTribunal)));
  }

  filtroTipoUnidadeChanged($event: any) {
    this.filtrosChanged.emit(this.filtros);
  }

  filtroClassificacaoChanged($event: any) {
    this.filtrosChanged.emit(this.filtros);
  }
}
