import {Component, EventEmitter, Output} from '@angular/core';
import {TiposJusticaService} from "../tipos-justica.service";
import {TipoJustica} from "../tipo-justica";

@Component({
  selector: 'app-nav-tipos-justica',
  templateUrl: './nav-tipos-justica.component.html',
  styleUrls: ['./nav-tipos-justica.component.scss']
})
export class NavTiposJusticaComponent {

  @Output()
  onClick = new EventEmitter<TipoJustica>();

  tiposJustica$ = this.tiposJusticaService.findAll();

  constructor(private tiposJusticaService: TiposJusticaService) {
  }
}
