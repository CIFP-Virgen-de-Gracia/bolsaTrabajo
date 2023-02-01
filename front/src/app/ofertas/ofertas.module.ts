import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasAlumnoComponent } from './ofertas-alumno/ofertas-alumno.component';
import { OfertasRoutingModule } from './ofertas-routing.module';

@NgModule({
  declarations: [
    OfertasAlumnoComponent
  ],
  exports: [
    OfertasAlumnoComponent
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule
  ]
})

export class OfertasModule { }
