import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasAlumnoComponent } from './pages/alumno/ofertas-alumno/ofertas-alumno.component';
import { OfertasEmpresaComponent } from './pages/empresa/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from './pages/empresa/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from './pages/empresa/listado-ofertas-empresa/listado-ofertas-empresa.component';
import { OfertaDetallesComponent } from './pages/alumno/oferta-detalles/oferta-detalles.component';

const routes: Routes = [
  {
    path: '',
    component: OfertasAlumnoComponent
  },
  {
    path: 'testing',
    component: OfertasEmpresaComponent
  },
  {
    path: 'testing/creacion',
    component: CreacionOfertaComponent
  },
  {
    path: 'testing/listado',
    component: ListadoOfertasEmpresa
  },
  {
    path: ':id',
    component: OfertaDetallesComponent
  },
  {
    path: 'testing/listado/:id',
    component: OfertaDetallesComponent
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
