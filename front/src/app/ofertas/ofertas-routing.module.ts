import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertasAlumnoComponent } from './ofertas-alumno/ofertas-alumno.component';
import { OfertasEmpresaComponent } from './ofertas-empresa/ofertas-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: OfertasAlumnoComponent
  },
  {
    path: 'testing',
    component: OfertasEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertasRoutingModule { }