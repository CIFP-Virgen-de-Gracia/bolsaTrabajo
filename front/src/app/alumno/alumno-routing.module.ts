import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    //component: InicioComponent,
    children: [
      { path: 'perfil', component: PerfilAlumnoComponent },
      { path: 'inicio', component: InicioComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
