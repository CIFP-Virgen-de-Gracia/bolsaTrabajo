import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuAlumnoComponent } from './menu-alumno/menu-alumno.component';
import { MenuEmpresaComponent } from './menu-empresa/menu-empresa.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    MenuAdministradorComponent,
    MenuAlumnoComponent,
    MenuEmpresaComponent
  ],
  exports:[
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
