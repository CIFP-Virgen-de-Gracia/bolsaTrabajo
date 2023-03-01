//Realizado por Khattari
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-usuarios',
  templateUrl: './creacion-usuarios.component.html',
  styleUrls: ['./creacion-usuarios.component.scss']
})
export class CreacionUsuariosComponent implements OnInit {

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton!.addEventListener('click', () => {
        container!.classList.add('right-panel-active');
    });

    signInButton!.addEventListener('click', () => {
        container!.classList.remove('right-panel-active');
    });
  }
}
