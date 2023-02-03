import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasAlumnoComponent } from './ofertas-alumno.component';

describe('OfertasAlumnoComponent', () => {
  let component: OfertasAlumnoComponent;
  let fixture: ComponentFixture<OfertasAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
