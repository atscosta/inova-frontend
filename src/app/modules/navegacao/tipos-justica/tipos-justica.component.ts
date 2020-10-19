import {Component} from '@angular/core';
import {TiposJusticaService} from "../../tipos-justica/tipos-justica.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'tipos-justica',
  templateUrl: './tipos-justica.component.html',
  styleUrls: ['./tipos-justica.component.scss']
})
export class TiposJusticaComponent {

  loading = true;
  tiposJustica$ = this.tiposJusticaService.findAll()
    .pipe(tap(() => this.loading = false));

  constructor(private tiposJusticaService: TiposJusticaService) {
  }
}
