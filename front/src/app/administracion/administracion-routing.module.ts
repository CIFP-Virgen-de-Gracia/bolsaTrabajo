//Realizado por Khattari
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { CreacionUsuariosComponent } from './pages/creacion-usuarios/creacion-usuarios.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { CreacionAdminComponent } from './pages/creacion-admin/creacion-admin.component';

const routes: Routes = [
    {
      path: '',
      component: OpcionesComponent
    },
    {
      path: 'creacion',
      component: CreacionUsuariosComponent
    },
    {
      path: 'gestion',
      component: GestionUsuariosComponent
    },
    {
      path: 'creacionadmin',
      component: CreacionAdminComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdministracionRoutingModule { }
  