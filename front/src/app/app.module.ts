import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { EmpresasModule } from './empresas/empresas.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    EmpresasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
