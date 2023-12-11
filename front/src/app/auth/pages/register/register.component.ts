import { Component, OnInit } from '@angular/core';
import { UserEmpresaResponse, UserAlumnoResponse } from '../../interface/req-resp';
import { RestBolsaService } from '../../services/rest-bolsa.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userEmpresa: UserEmpresaResponse = {
    nif:         '',
    nombre:      '',
    email:       '',
    password:    '',
    status:      0,
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
    status:      0,
    rol:         2,
    telefono:    '',
    apellido1:   '',
    apellido2:   '',
  } 
  

  constructor(private restBolsaService: RestBolsaService) {
  }

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
        if (response.success) {
          this.abrir()
        }
        else {
          this.abrirFalse()
        }
      })
  }

  guardarAlumno() {
    //Validacion
    var nifRegex: RegExp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i
    if (this.userAlumno.nif?.trim().length === 0 && nifRegex.exec(this.userAlumno.nif)) return;
    if (this.userAlumno.nombre.trim().length === 0) return;
    if (this.userAlumno.email.trim().length === 0) return;
    if (this.userAlumno.password.trim().length === 0) return;
    if (this.userAlumno.telefono.trim().length === 0) return;
    if (this.userAlumno.apellido1.trim().length === 0) return;
    if (this.userAlumno.apellido2.trim().length === 0) return;

    this.userAlumno.password  

    this.restBolsaService.crearAlumno(this.userAlumno)
      .subscribe(response => {
        if (response.success) {
          this.abrir()
        }
        else {
          this.abrirFalse()
        }
      })
  }

  abrir() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "block";
    let body = document.getElementsByTagName("body")[0];
    body!.style.overflow = "hidden";
  }

  abrirFalse() {
    let modal = document.getElementById("myModalFalse");
    modal!.style.display = "block";
    let body = document.getElementsByTagName("body")[0];
    body!.style.overflow = "hidden";
  }

  cerrar() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "none";
    location.replace('http://localhost:4200/')
  }

  cerrarFalse() {
    let modal = document.getElementById("myModalFalse");
    modal!.style.display = "none";
  }

}
