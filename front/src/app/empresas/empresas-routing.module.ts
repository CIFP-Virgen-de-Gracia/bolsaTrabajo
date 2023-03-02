import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { InterfazEmpresaComponent } from './pages/interfaz-empresa/interfaz-empresa.component';
import { FormularioEmpresaComponent } from './pages/formulario-empresa/formulario-empresa.component';
import { FormContactoEmpresaComponent } from './pages/form-contacto-empresa/form-contacto-empresa.component';
import { ListadoEmpresasComponent } from './pages/listado-empresas/listado-empresas.component';
import { InicioEmpresaComponent } from './pages/inicio-empresa/inicio-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: InicioEmpresaComponent
  },
  {
    path: 'inicio',
    component: InicioEmpresaComponent
  },
  {
    path: 'formularioempresa',
    component: FormularioEmpresaComponent
  },
  {
    path:'formulariocontacto',
    component: FormContactoEmpresaComponent
  },
  {
    path: 'listado',
    component: ListadoEmpresasComponent
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

export class EmpresasRoutingModule { }
