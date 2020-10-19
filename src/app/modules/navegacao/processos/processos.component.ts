import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProcessosService} from "./processos.service";
import {Observable} from "rxjs";
import {Processo} from "./processo";
import {map, mergeMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  procesos$: Observable<Processo[]>;
  loading = false;

  constructor(private route: ActivatedRoute, private processosService: ProcessosService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.procesos$ = this.route.params
      .pipe(
        map(params => params['codigoUnidadeJudiciaria']),
        mergeMap(this.processosService.findByCodigoUnidadeJudiciaria),
        tap(() => this.loading = false)
      );
  }
}
