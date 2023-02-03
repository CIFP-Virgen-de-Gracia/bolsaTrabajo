import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasAlumnoComponent } from './components/ofertas-alumno/ofertas-alumno.component';
import { OfertasEmpresaComponent } from './components/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from './components/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from './components/listado-ofertas-empresa/listado-ofertas-empresa.component';

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