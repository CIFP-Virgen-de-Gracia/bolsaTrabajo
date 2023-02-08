import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from 'src/app/auth/auth-routing.module';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { RegisterComponent } from 'src/app/auth/pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from 'src/app/auth/pages/welcome/welcome.component';
import { MainComponent } from 'src/app/auth/main/main.component';
@NgModule({
  declarations: [
    WelcomeComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule


  ],
  // exports: [
  //   WelcomeComponent,
  //   LoginComponent,
  //   RegisterComponent,

  // ]
})
export class AuthModule { }
