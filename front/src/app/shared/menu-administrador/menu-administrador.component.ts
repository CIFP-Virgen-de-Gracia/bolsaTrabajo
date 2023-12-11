import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.scss']
})
export class MenuAdministradorComponent {

  user = JSON.parse(localStorage.getItem('user') || '{}')

  cerrarSesion() {
    localStorage.clear()
    location.replace('http://localhost:4200/')
  }
  
}
