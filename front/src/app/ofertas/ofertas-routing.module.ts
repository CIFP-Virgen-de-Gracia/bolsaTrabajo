import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasAlumnoComponent } from './pages/ofertas-alumno/ofertas-alumno.component';
import { OfertasEmpresaComponent } from './pages/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from './pages/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from './pages/listado-ofertas-empresa/listado-ofertas-empresa.component';

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
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }