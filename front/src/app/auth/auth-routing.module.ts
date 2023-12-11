import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActivatedComponent } from 'src/app/auth/pages/activated/activated.component';

let routesVar: Routes = []

switch (localStorage.getItem('rol')) {
  case '1':
    routesVar = [
      {
        path: '',
        loadChildren:() => import('../administracion/administracion.module').then((m) => m.AdministracionModule),
      },
      {
        path: '**',
        redirectTo: ''
      }
    ];
    break;
  
  case '2':
    routesVar = [
      {
        path: '',
        loadChildren: () => import('../alumno/alumno.module').then( m => m.AlumnoModule )
      },
      {
        path: '**',
        redirectTo: ''
      }
    ];
    break;
  
  case '3':
    routesVar = [
      {
        path: '',
        loadChildren:() => import('../empresas/empresas.module').then((m) => m.EmpresasModule),
      },
      {
        path: '**',
        redirectTo: ''
      }
    ];
    break;
  default:
    routesVar = [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'activate/:user',
        component: ActivatedComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '**',
        redirectTo: ''
      }
    ];
    break;
}

const routes: Routes = routesVar

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
