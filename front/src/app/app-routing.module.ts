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
    path: 'ofertas',
    loadChildren:() => import('./ofertas/ofertas.module').then((m) => m.OfertasModule),
  },
  {
    //Para redireccionar a inicio por si teclean una ruta que no sea correcta
    path: '**',
    redirectTo: ''
  }
];
