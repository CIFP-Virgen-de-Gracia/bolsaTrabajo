import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-empresa',
  templateUrl: './menu-empresa.component.html',
  styleUrls: ['./menu-empresa.component.scss']
})
export class MenuEmpresaComponent {

  user = JSON.parse(localStorage.getItem('user') || '{}')


  cerrarSesion() {
    localStorage.clear()
    location.replace('http://localhost:4200/')
  }
  
}
