import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { AlumnoRoutingModule } from './alumno-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    PerfilAlumnoComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule
  ]
})
export class AlumnoModule { }
