import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from 'src/app/auth/welcome/welcome.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthRoutingModule} from 'src/app/auth/auth-routing.module';

@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule


  ],
  exports: [
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,

  ]
})
export class AuthModule { }
