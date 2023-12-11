import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.component.html',
  styleUrls: ['./menu-alumno.component.scss']
})
export class MenuAlumnoComponent {
  
  public user = JSON.parse(localStorage.getItem('user') || '{}')

  cerrarSesion() {
    localStorage.clear()
    location.replace('http://localhost:4200/')
  }
}
