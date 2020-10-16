import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-executar-tribunais',
  templateUrl: './tribunais.component.html',
  styleUrls: ['./tribunais.component.scss']
})
export class TribunaisComponent implements OnInit {

  codigoTipoJustica$: Observable<string>;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.codigoTipoJustica$ = this.route.params
      .pipe(map(params => params['codigoTipoJustica']));
  }
}
