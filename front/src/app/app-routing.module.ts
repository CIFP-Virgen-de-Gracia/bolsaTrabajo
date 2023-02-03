import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoModule )
  },
  {
    path: 'welcome',
    loadChildren:() => import('../app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'empresas',
    loadChildren:() => import('./empresas/empresas.module').then((m) => m.EmpresasModule),
  },
  {
    path: 'listado',
    loadChildren:() => import('./empresas/empresas.module').then((m) => m.EmpresasModule),
  },
  {
    path: 'ofertas',
    loadChildren:() => import('./ofertas/ofertas.module').then((m) => m.OfertasModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





