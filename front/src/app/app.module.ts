//Ines
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from 'src/auth/welcome/welcome.component';
import { LoginComponent } from 'src/auth/login/login.component';
import { RegisterComponent } from 'src/auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from '../auth/logout/logout.component';
import { RegisterSuccessfulComponent } from '../auth/register-successful/register-successful.component';
import { LoginSuccessfulComponent } from '../auth/login-successful/login-successful.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    RegisterSuccessfulComponent,
    LoginSuccessfulComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
