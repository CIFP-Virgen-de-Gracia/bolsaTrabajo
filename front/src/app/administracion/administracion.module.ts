//Realizado por Khattari
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { CreacionUsuariosComponent } from './pages/creacion-usuarios/creacion-usuarios.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';

@NgModule({
  declarations: [
    OpcionesComponent,
    CreacionUsuariosComponent,
    GestionUsuariosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministracionModule { }
