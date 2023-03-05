//Realizado por Khattari
import { Component, OnInit } from '@angular/core';
import { UserEmpresaResponse, UserAlumnoResponse } from '../../interfaces/req-resp';
import { RestBolsaService } from '../../services/rest-bolsa.service';

@Component({
  selector: 'app-creacion-usuarios',
  templateUrl: './creacion-usuarios.component.html',
  styleUrls: ['./creacion-usuarios.component.scss']
})
export class CreacionUsuariosComponent implements OnInit {

  userEmpresa: UserEmpresaResponse = {
    nif:         '',
    nombre:      '',
    email:       '',
    password:    '',
    status:      1,
    rol:         3,
    telefono:    '',
    direccion:   '',
    contacto:    '',
    cargo:       '',
  }

  userAlumno: UserAlumnoResponse = {
    nif:         '',
    nombre:      '',
    email:       '',
    password:    '',
    status:      1,
    rol:         3,
    telefono:    '',
    apellido1:   '',
    apellido2:   '',
  } 

  constructor(private restBolsaService: RestBolsaService) {}

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

  guardarEmpresa() {
    //Validacion
    if (this.userEmpresa.nif?.trim().length === 0) return;
    if (this.userEmpresa.nombre.trim().length === 0) return;
    if (this.userEmpresa.email.trim().length === 0) return;
    if (this.userEmpresa.password.trim().length === 0) return;
    if (this.userEmpresa.telefono.trim().length === 0) return;
    if (this.userEmpresa.direccion.trim().length === 0) return;
    if (this.userEmpresa.contacto.trim().length === 0) return;
    if (this.userEmpresa.cargo.trim().length === 0) return;

    this.restBolsaService.crearEmpresa(this.userEmpresa)
      .subscribe(response => {
        this.abrir()
      })
  }

  guardarAlumno() {
    //Validacion
    if (this.userAlumno.nif?.trim().length === 0) return;
    if (this.userAlumno.nombre.trim().length === 0) return;
    if (this.userAlumno.email.trim().length === 0) return;
    if (this.userAlumno.password.trim().length === 0) return;
    if (this.userAlumno.telefono.trim().length === 0) return;
    if (this.userAlumno.apellido1.trim().length === 0) return;
    if (this.userAlumno.apellido2.trim().length === 0) return;

    this.restBolsaService.crearAlumno(this.userAlumno)
      .subscribe(response => {
        this.abrir()
      })
  }

  abrir() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "block";
    let body = document.getElementsByTagName("body")[0];
    body!.style.overflow = "hidden";
  }

  cerrar() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "none";
    location.replace('http://localhost:4200/administracion')
  }

}
