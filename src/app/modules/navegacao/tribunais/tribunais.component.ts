import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/operators";
import {Tribunal} from "../../tribunais/tribunal";

@Component({
  selector: 'app-resultados-tribunais',
  templateUrl: './tribunais.component.html',
  styleUrls: ['./tribunais.component.scss']
})
export class TribunaisComponent implements OnInit {

  codigoTipoJustica$: Observable<string>;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.codigoTipoJustica$ = this.route.params
      .pipe(map(params => params['codigoTipoJustica']));
  }

  onCLick(trib: Tribunal) {
    const codigoTipoJustica = this.route.snapshot.paramMap.get('codigoTipoJustica');
    this.router.navigate(['/tipos-justica', codigoTipoJustica, 'tribunais', trib.codigo, 'unidades']);
  }
}
