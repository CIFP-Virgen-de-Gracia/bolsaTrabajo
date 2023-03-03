import { Component, NgModule } from '@angular/core';
import { MenuAlumnoComponent } from '../menu-alumno/menu-alumno.component';
import { MenuEmpresaComponent } from '../menu-empresa/menu-empresa.component';
import { MenuAdministradorComponent } from '../menu-administrador/menu-administrador.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

 export class MenuComponent {
  rol: number = 3;
}
