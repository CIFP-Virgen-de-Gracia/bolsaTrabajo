import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpresasModule } from './empresas/empresas.module';
import { OfertasModule } from './ofertas/ofertas.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    EmpresasModule,
    HttpClientModule,
    SharedModule,
    OfertasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
