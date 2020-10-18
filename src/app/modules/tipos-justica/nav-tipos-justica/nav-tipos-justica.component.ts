import {Component, EventEmitter, Output} from '@angular/core';
import {TiposJusticaService} from "../tipos-justica.service";
import {TipoJustica} from "../tipo-justica";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-nav-tipos-justica',
  templateUrl: './nav-tipos-justica.component.html',
  styleUrls: ['./nav-tipos-justica.component.scss']
})
export class NavTiposJusticaComponent {

  @Output()
  onClick = new EventEmitter<TipoJustica>();

  loading = true;

  tiposJustica$ = this.tiposJusticaService.findAll()
    .pipe(tap(() => this.loading = false));

  constructor(private tiposJusticaService: TiposJusticaService) {
  }
}
