import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { WelcomeComponent } from '../auth/welcome/welcome.component';
import { LoginSuccessfulComponent } from '../auth/login-successful/login-successful.component';
import { RegisterSuccessfulComponent } from '../auth/register-successful/register-successful.component';
import { LogoutComponent } from '../auth/logout/logout.component';

const routes: Routes = [

  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'loginSuccessful/:id',
    component: LoginSuccessfulComponent
  },
  {
    path: 'logout/:id',
    component: LogoutComponent
  },

  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'registerSuccessful',
    component: RegisterSuccessfulComponent
  },

  {
    path: '**',
    redirectTo: 'welcome',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
