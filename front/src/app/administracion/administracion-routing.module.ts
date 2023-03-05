//Realizado por Khattari
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpcionesComponent } from './pages/opciones/opciones.component';
import { CreacionUsuariosComponent } from './pages/creacion-usuarios/creacion-usuarios.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { CreacionAdminComponent } from './pages/creacion-admin/creacion-admin.component';
import { EditarAlumnoComponent } from './pages/edicion/editar-alumno/editar-alumno.component';
import { EditarEmpresaComponent } from './pages/edicion/editar-empresa/editar-empresa.component';
import { EditarAdminComponent } from './pages/edicion/editar-admin/editar-admin.component';

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
      path: 'gestion/editaralumno/:nif',
      component: EditarAlumnoComponent
    },
    {
      path: 'gestion/editarempresa/:nif',
      component: EditarEmpresaComponent
    },
    {
      path: 'gestion/editaradmin/:nif',
      component: EditarAdminComponent
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
  