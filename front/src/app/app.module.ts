
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpresasModule } from './empresas/empresas.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule
    FormsModule,
    AppRoutingModule,
    EmpresasModule,
    HttpClientModule,
    SharedModule,
    OfertasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
