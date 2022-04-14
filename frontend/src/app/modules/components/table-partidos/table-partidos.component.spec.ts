import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePartidosComponent } from './table-partidos.component';

describe('TablePartidosComponent', () => {
  let component: TablePartidosComponent;
  let fixture: ComponentFixture<TablePartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
