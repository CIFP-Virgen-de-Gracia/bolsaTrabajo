import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfazEmpresaComponent } from './pages/interfaz-empresa/interfaz-empresa.component';
import { FormularioEmpresaComponent } from './pages/formulario-empresa/formulario-empresa.component';
import { FormContactoEmpresaComponent } from './pages/form-contacto-empresa/form-contacto-empresa.component';
import { ListadoEmpresasComponent } from './pages/listado-empresas/listado-empresas.component';
import { InicioEmpresaComponent } from './pages/inicio-empresa/inicio-empresa.component';
import { ListadoFormContactoComponent } from './pages/listado-form-contacto/listado-form-contacto.component';
import { OfertasEmpresaComponent } from './pages/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from '../empresas/pages/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from '../empresas/pages/listado-ofertas-empresa/listado-ofertas-empresa.component';
import { OfertaDetallesComponent } from '../alumno/pages/oferta-detalles/oferta-detalles.component';
import { EdicionOfertaComponent } from '../empresas/pages/edicion-oferta/edicion-oferta.component';

const routes: Routes = [
  {
    path: '',
    component: InicioEmpresaComponent
  },
  {
    path: 'empresas',
    component: InicioEmpresaComponent
  },
  {
    path: 'empresas/interfazempresa',
    component: InterfazEmpresaComponent
  },
  {
    path: 'empresas/formularioempresa',
    component: FormularioEmpresaComponent
  },
  {
    path:'empresas/formulariocontacto',
    component: FormContactoEmpresaComponent
  },
  {
    path: 'empresas/listado',
    component: ListadoEmpresasComponent
  },
  {
    path: 'empresas/listaformularioscontacto',
    component: ListadoFormContactoComponent
  },
  {
    path: 'empresas/ofertas',
    component: OfertasEmpresaComponent,
  },
  {
    path: 'empresas/ofertas/creacion',
    component: CreacionOfertaComponent,
  },
  {
    path: 'empresas/ofertas/listado',
    component: ListadoOfertasEmpresa,
  },
  {
    path: 'empresas/listado/:id',
    component: OfertaDetallesComponent
  },
  {
    path: 'empresas/ofertas/listado/editar/:id',
    component: EdicionOfertaComponent
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
