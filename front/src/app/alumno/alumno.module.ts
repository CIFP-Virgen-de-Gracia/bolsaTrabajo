import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { AlumnoRoutingModule } from './alumno-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SharedModule } from '../shared/shared.module';
import { FormContactoEmpresaComponent } from './pages/form-contacto-empresa/form-contacto-empresa.component';

@NgModule({
  declarations: [
    PerfilAlumnoComponent,
    InicioComponent,
    FormContactoEmpresaComponent
  ],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    SharedModule
  ]
})
export class AlumnoModule { }
