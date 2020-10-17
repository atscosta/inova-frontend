import {Component, Input, OnInit} from '@angular/core';
import {TribunaisService} from "../../../tribunais/tribunais.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-input-tribunal',
  templateUrl: './input-tribunal.component.html',
  styleUrls: ['./input-tribunal.component.scss']
})
export class InputTribunalComponent implements OnInit {

  @Input()
  codigoTribunal: string;

  nomeTribunal$: Observable<string>;

  constructor(private tribunaisService: TribunaisService) {
  }

  ngOnInit(): void {
    this.nomeTribunal$ = this.tribunaisService.findByCodigo(this.codigoTribunal)
      .pipe(map(tribunal => tribunal.descricao));
  }
}
