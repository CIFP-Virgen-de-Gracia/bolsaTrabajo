import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasAlumnoComponent } from '../alumno/pages/ofertas-alumno/ofertas-alumno.component';
import { OfertasEmpresaComponent } from '../empresas/pages/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from '../empresas/pages/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from '../empresas/pages/listado-ofertas-empresa/listado-ofertas-empresa.component';
import { OfertaDetallesComponent } from '../alumno/pages/oferta-detalles/oferta-detalles.component';
import { EdicionOfertaComponent } from '../empresas/pages/edicion-oferta/edicion-oferta.component';

const routes: Routes = [
  {
    path: '',
    component: OfertasAlumnoComponent
  },
  {
    path: 'empresa',
    component: OfertasEmpresaComponent
  },
  {
    path: 'empresa/creacion',
    component: CreacionOfertaComponent
  },
  {
    path: 'empresa/listado',
    component: ListadoOfertasEmpresa
  },
  {
    path: ':id',
    component: OfertaDetallesComponent
  },
  {
    path: 'empresa/listado/:id',
    component: OfertaDetallesComponent
  },
  {
    path: 'empresa/listado/editar/:id',
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
export class OfertasRoutingModule { }
