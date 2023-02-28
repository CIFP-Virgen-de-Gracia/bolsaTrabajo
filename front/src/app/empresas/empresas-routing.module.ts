import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEmpresaComponent } from './pages/formulario-empresa/formulario-empresa.component';
import { ListadoEmpresasComponent } from './pages/listado-empresas/listado-empresas.component';

const routes: Routes = [
  {
    path: 'formularioempresa',
    component: FormularioEmpresaComponent
  },
  {
    path: 'listado',
    component: ListadoEmpresasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmpresasRoutingModule { }
