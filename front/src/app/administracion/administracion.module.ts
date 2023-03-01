//Realizado por Khattari
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { CreacionUsuariosComponent } from './pages/creacion-usuarios/creacion-usuarios.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { CreacionAdminComponent } from './pages/creacion-admin/creacion-admin.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OpcionesComponent,
    CreacionUsuariosComponent,
    GestionUsuariosComponent,
    CreacionAdminComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    SharedModule
  ]
})
export class AdministracionModule { }
