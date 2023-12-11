import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuAlumnoComponent } from './menu-alumno/menu-alumno.component';
import { MenuWelcomeComponent } from './menu-welcome/menu-welcome.component';
import { MenuEmpresaComponent } from './menu-empresa/menu-empresa.component';
import { SharedRoutingModule } from './shared-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    MenuAdministradorComponent,
    MenuAlumnoComponent,
    MenuWelcomeComponent,
    MenuEmpresaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  exports: [
    CommonModule,
    MenuComponent,
    MenuAdministradorComponent,
    MenuEmpresaComponent,
    MenuAlumnoComponent,
    MenuWelcomeComponent,
    FooterComponent
  ]
})
export class SharedModule { }
