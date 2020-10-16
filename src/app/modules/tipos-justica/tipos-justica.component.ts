import {Component} from '@angular/core';
import {TiposJusticaService} from "./tipos-justica.service";

@Component({
  selector: 'app-tipos-justica',
  templateUrl: './tipos-justica.component.html',
  styleUrls: ['./tipos-justica.component.scss']
})
export class TiposJusticaComponent {

  tiposJustica$ = this.tiposJusticaService.findAll();

  constructor(private tiposJusticaService: TiposJusticaService) {
  }
}
