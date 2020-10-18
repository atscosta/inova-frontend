import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TribunaisService} from "../tribunais.service";
import {Observable} from "rxjs";
import {Tribunal} from "../tribunal";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-tribunais',
  templateUrl: './nav-tribunais.component.html',
  styleUrls: ['./nav-tribunais.component.scss']
})
export class NavTribunaisComponent implements OnInit {

  @Input()
  rootLabel: string;

  @Input()
  codigoJustica: string;

  @Output()
  onClick = new EventEmitter<Tribunal>();

  tribunais$: Observable<Tribunal[]>;

  loading = false;

  constructor(private tribunaisService: TribunaisService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.tribunais$ = this.tribunaisService.findByCodigoJustica(this.codigoJustica)
      .pipe(tap(() => this.loading = false));
  }
}
