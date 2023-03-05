//Realizado por Khattari
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasAlumnoComponent } from './pages/alumno/ofertas-alumno/ofertas-alumno.component';
import { OfertasEmpresaComponent } from './pages/empresa/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from './pages/empresa/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from './pages/empresa/listado-ofertas-empresa/listado-ofertas-empresa.component';
import { OfertaDetallesComponent } from './pages/alumno/oferta-detalles/oferta-detalles.component';
import { EdicionOfertaComponent } from './pages/empresa/edicion-oferta/edicion-oferta.component';

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
