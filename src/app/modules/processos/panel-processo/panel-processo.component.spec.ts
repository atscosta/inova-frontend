import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProcessoComponent } from './panel-processo.component';

describe('PanelProcessoComponent', () => {
  let component: PanelProcessoComponent;
  let fixture: ComponentFixture<PanelProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelProcessoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
