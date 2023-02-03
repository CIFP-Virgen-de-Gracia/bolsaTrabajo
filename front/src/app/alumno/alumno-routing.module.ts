import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PerfilAlumnoComponent } from './pages/perfil-alumno/perfil-alumno.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilAlumnoComponent,
    children: [
      { path: 'perfil', component: PerfilAlumnoComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
