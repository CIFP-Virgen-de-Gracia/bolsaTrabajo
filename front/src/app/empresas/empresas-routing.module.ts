import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEmpresaComponent } from './components/formulario-empresa/formulario-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'datos', component: FormularioEmpresaComponent },
      { path: 'listado', component: ListadoEmpresasComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
