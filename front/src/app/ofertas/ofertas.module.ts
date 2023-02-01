import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasAlumnoComponent } from './ofertas-alumno/ofertas-alumno.component';



@NgModule({
  declarations: [
    OfertasAlumnoComponent
  ],
  exports: [
    OfertasAlumnoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OfertasModule { }
