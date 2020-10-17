import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {UnidadeJudiciaria} from "../../unidades-judiciarias/unidade-judiciaria";
import {map, mergeMap, tap} from "rxjs/operators";
import {UnidadesJudiciariasService} from "../../unidades-judiciarias/unidades-judiciarias.service";

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss']
})
export class UnidadesComponent implements OnInit {

  unidadesJudiciarias$: Observable<UnidadeJudiciaria[]>;
  breadcrumbItens: any;

  tclColors = [{ backgroundColor: ['#ff8a65', '#fff3e0'] }];
  tctColors = [{ backgroundColor: ['#ffb74d', '#fbe9e7'] }];
  vldColors = [{ backgroundColor: ['#81c784', '#e57373'] }];

  constructor(private route: ActivatedRoute, private unidadesJudiciariasService: UnidadesJudiciariasService) {
  }

  ngOnInit(): void {
    this.unidadesJudiciarias$ = this.route.params
      .pipe(
        tap(params => {
          this.breadcrumbItens = [
            {label: 'Resultados e Estatísticas', link: ''},
            {label: '...', link: ['/resultados', params['codigoTipoJustica']]},
            {label: '...', link: ['/resultados', params['codigoTipoJustica'], params['codigoTribunal']]},
          ]
        }),
        map(params => params['codigoTribunal']),
        mergeMap(this.unidadesJudiciariasService.findByCodigoTribunal)
      );
  }

}
