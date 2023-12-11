import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { OfertasAlumnoComponent } from './pages/ofertas-alumno/ofertas-alumno.component';
import { OfertaDetallesComponent } from './pages/oferta-detalles/oferta-detalles.component';
import { FormContactoEmpresaComponent } from './pages/form-contacto-empresa/form-contacto-empresa.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'alumno/perfil',
    component: PerfilAlumnoComponent,
  },
  {
    path: 'alumno/perfil',
    component: PerfilAlumnoComponent,
  },
  {
    path: 'alumno/ofertas',
    component: OfertasAlumnoComponent,
  },
  {
    path: 'alumno/ofertas/:id',
    component: OfertaDetallesComponent
  },
  {
    path: '**',
    component: InicioComponent,
  },
  {
    path: 'alumno/contacto',
    component: FormContactoEmpresaComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
