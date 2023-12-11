import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { CreacionUsuariosComponent } from './pages/creacion-usuarios/creacion-usuarios.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { CreacionAdminComponent } from './pages/creacion-admin/creacion-admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EditarAlumnoComponent } from './pages/edicion/editar-alumno/editar-alumno.component';
import { EditarEmpresaComponent } from './pages/edicion/editar-empresa/editar-empresa.component';
import { EditarAdminComponent } from './pages/edicion/editar-admin/editar-admin.component';

@NgModule({
  declarations: [
    OpcionesComponent,
    CreacionUsuariosComponent,
    GestionUsuariosComponent,
    CreacionAdminComponent,
    EditarAlumnoComponent,
    EditarEmpresaComponent,
    EditarAdminComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class AdministracionModule { }
