import {Component, EventEmitter, Output} from '@angular/core';
import {TiposJusticaService} from "./tipos-justica.service";
import {TipoJustica} from "./tipo-justica";

@Component({
  selector: 'app-tipos-justica',
  templateUrl: './tipos-justica.component.html',
  styleUrls: ['./tipos-justica.component.scss']
})
export class TiposJusticaComponent {

  @Output()
  onClick = new EventEmitter<TipoJustica>();

  tiposJustica$ = this.tiposJusticaService.findAll();

  constructor(private tiposJusticaService: TiposJusticaService) {
  }
}
