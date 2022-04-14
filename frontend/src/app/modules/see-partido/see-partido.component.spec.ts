import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeePartidoComponent } from './see-partido.component';

describe('SeePartidoComponent', () => {
  let component: SeePartidoComponent;
  let fixture: ComponentFixture<SeePartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeePartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeePartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
