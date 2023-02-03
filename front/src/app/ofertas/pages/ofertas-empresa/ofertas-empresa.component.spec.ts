import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertasEmpresaComponent } from './ofertas-empresa.component';

describe('OfertasEmpresaComponent', () => {
  let component: OfertasEmpresaComponent;
  let fixture: ComponentFixture<OfertasEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfertasEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfertasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
