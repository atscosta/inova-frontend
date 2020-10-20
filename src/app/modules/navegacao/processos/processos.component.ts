import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProcessosService} from './processos.service';
import {Observable} from 'rxjs';
import {Processo} from './processo';
import {map, mergeMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.scss']
})
export class ProcessosComponent implements OnInit {

  procesos$: Observable<Processo[]>;

  numTotal: number;
  currentPage = 0;
  pageSize = 12;
  loading = false;

  constructor(private route: ActivatedRoute, private processosService: ProcessosService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.procesos$ = this.route.params
      .pipe(
        map(params => params.codigoUnidadeJudiciaria),
        tap(this.initNumTotal),
        mergeMap(codigo => this.processosService.findByCodigoUnidadeJudiciaria(codigo, this.currentPage * this.pageSize, this.pageSize)),
        tap(() => this.loading = false)
      );
  }

  private initNumTotal = codigoUnidadeJudiciaria => this.processosService.countByCodigoUnidadeJudiciaria(codigoUnidadeJudiciaria)
    .subscribe(total => this.numTotal = total)

  onValidate(processo: Processo) {
    this.ngOnInit();
  }

  pageChange(page: any) {
    this.currentPage = page;
    this.ngOnInit();
  }
}
