import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'welcome',
    loadChildren:() => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'alumno',
    loadChildren: () => import('./alumno/alumno.module').then( m => m.AlumnoModule )

  },  
  {
    path: 'empresas',
    loadChildren:() => import('./empresas/empresas.module').then((m) => m.EmpresasModule),
  },
  {
    path: 'ofertas',
    loadChildren:() => import('./ofertas/ofertas.module').then((m) => m.OfertasModule),
  },
  {
    path: 'administracion',
    loadChildren:() => import('./administracion/administracion.module').then((m) => m.AdministracionModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




