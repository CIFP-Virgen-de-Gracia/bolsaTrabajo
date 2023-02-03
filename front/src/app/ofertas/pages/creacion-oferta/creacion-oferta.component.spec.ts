import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionOfertaComponent } from './creacion-oferta.component';

describe('CreacionOfertaComponent', () => {
  let component: CreacionOfertaComponent;
  let fixture: ComponentFixture<CreacionOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreacionOfertaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
