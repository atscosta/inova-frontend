import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TribunaisService} from "../tribunais.service";
import {Observable} from "rxjs";
import {Tribunal} from "../tribunal";
import {map} from "rxjs/operators";
import {TiposJusticaService} from "../../tipos-justica/tipos-justica.service";

@Component({
  selector: 'app-tribunais',
  templateUrl: './nav-tribunais.component.html',
  styleUrls: ['./nav-tribunais.component.scss']
})
export class NavTribunaisComponent implements OnInit {

  @Input()
  rootLabel: string;

  @Input()
  rootLink: string;

  @Input()
  codigoJustica: string;

  @Output()
  onClick = new EventEmitter<Tribunal>();

  tribunais$: Observable<Tribunal[]>;

  breadcrumbItens$: Observable<any>;

  constructor(private tribunaisService: TribunaisService,
              private tiposJusticaService: TiposJusticaService) {
  }

  ngOnInit(): void {
    this.tribunais$ = this.tribunaisService.findByCodigoJustica(this.codigoJustica);
    this.breadcrumbItens$ = this.tiposJusticaService.findByCodigo(this.codigoJustica)
      .pipe(map(tipoJustica => [
        {label: this.rootLabel, link: this.rootLink},
        {label: tipoJustica.descricao, link: [this.rootLink, tipoJustica.codigo]}
      ]));
  }
}
