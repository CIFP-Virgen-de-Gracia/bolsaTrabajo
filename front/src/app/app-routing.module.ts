import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./empresas/empresas.module').then((m) => m.EmpresasModule),
  },
  {
    path: 'listado',
    loadChildren:() => import('./empresas/empresas.module').then((m) => m.EmpresasModule),
  },
  {
    //Para redireccionar a inicio por si teclean una ruta que no sea correcta
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
