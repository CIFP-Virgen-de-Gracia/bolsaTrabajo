import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasAlumnoComponent } from './ofertas-alumno/ofertas-alumno.component';
import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasEmpresaComponent } from './ofertas-empresa/ofertas-empresa.component';

@NgModule({
  declarations: [
    OfertasAlumnoComponent,
    OfertasEmpresaComponent
  ],
  exports: [
    OfertasAlumnoComponent,
    OfertasEmpresaComponent
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule
  ]
})

export class OfertasModule { }
