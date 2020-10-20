import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {map, mergeMap, tap} from "rxjs/operators";
import {Tribunal} from "../../tribunais/tribunal";
import {TribunaisService} from "../../tribunais/tribunais.service";

@Component({
  selector: 'app-resultados-tribunais',
  templateUrl: './tribunais.component.html',
  styleUrls: ['./tribunais.component.scss']
})
export class TribunaisComponent implements OnInit {

  loading = false;
  tribunais$: Observable<Tribunal[]>;

  constructor(private route: ActivatedRoute, private tribunaisService: TribunaisService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.tribunais$ = this.route.params
      .pipe(
        map(params => params['codigoTipoJustica']),
        mergeMap(this.tribunaisService.findByCodigoJustica),
        tap(() => this.loading = false)
      );
  }
}
