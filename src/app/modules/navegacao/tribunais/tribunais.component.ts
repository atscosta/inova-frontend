import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Tribunal} from '../../tribunais/tribunal';
import {TribunaisService} from '../../tribunais/tribunais.service';
import {TiposJusticaService} from '../../tipos-justica/tipos-justica.service';

@Component({
  selector: 'app-resultados-tribunais',
  templateUrl: './tribunais.component.html',
  styleUrls: ['./tribunais.component.scss']
})
export class TribunaisComponent implements OnInit {

  loading = false;
  tribunais$: Observable<Tribunal[]>;
  tipo: string;

  constructor(private route: ActivatedRoute, private tribunaisService: TribunaisService, private tipoJusticaService: TiposJusticaService) {
  }
  ngOnInit(): void {

    this.loading = true;
    this.tribunais$ = this.route.params
      .pipe(
        map(params => params.codigoTipoJustica),
        mergeMap(this.tribunaisService.findByCodigoJustica),
        tap(() => this.loading = false)
      );

    this.route.params.pipe(
      map(params => params.codigoTipoJustica),
      mergeMap(this.tipoJusticaService.findByCodigo),
      map(tipo => tipo.descricao)
    ).subscribe(descricao => this.tipo = descricao);

  }
}
