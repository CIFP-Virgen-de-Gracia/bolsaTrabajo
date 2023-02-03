import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { AlumnoRoutingModule } from './alumno-routing.module';


@NgModule({
  declarations: [
    PerfilAlumnoComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
