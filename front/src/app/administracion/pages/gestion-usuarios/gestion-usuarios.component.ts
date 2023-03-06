//Realizado por Khattari
import { Component, OnInit } from '@angular/core';
import { UserResponse, UserAlumno2Response, UserEmpresa2Response } from '../../interfaces/req-resp';
import { RestBolsaService } from '../../services/rest-bolsa.service';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.scss']
})
export class GestionUsuariosComponent implements OnInit {

  datosUser: any = [];
  datosAlumno: any = [];
  datosEmpresa: any = [];

  constructor(private restBolsaService: RestBolsaService) { }

  ngOnInit(): void {
    this.getAlumnos();
    this.getEmpresas();
    this.getDatosUser();
  }

  public getDatosUser() {
    this.restBolsaService.getUsers().subscribe((response: UserResponse) => {
      this.datosUser = response
    })
  }

  public getAlumnos() {
    this.restBolsaService.getAlumnos().subscribe((response: UserAlumno2Response) => {
      this.datosAlumno = response
    })
  }

  public getEmpresas() {
    this.restBolsaService.getEmpresas().subscribe((response: UserEmpresa2Response) => {
      this.datosEmpresa = response
    })
  }

  cambioEmpresa() {
    let table_alumno = document.getElementById("table-alumnos");
    table_alumno!.style.display = "none";
    let table_admins = document.getElementById("table-admins");
    table_admins!.style.display = "none";
    let table_empresa = document.getElementById("table-empresa");
    table_empresa!.style.display = "block";
  }

  cambioAlumnos() {
    let table_empresa = document.getElementById("table-empresa");
    table_empresa!.style.display = "none";
    let table_admins = document.getElementById("table-admins");
    table_admins!.style.display = "none";
    let table_alumno = document.getElementById("table-alumnos");
    table_alumno!.style.display = "block";
  }

  cambioAdmins() {
    let table_alumno = document.getElementById("table-alumnos");
    table_alumno!.style.display = "none";
    let table_empresa = document.getElementById("table-empresa");
    table_empresa!.style.display = "none";
    let table_admins = document.getElementById("table-admins");
    table_admins!.style.display = "block";
  }

  activarUser(nif: string) {
    this.restBolsaService.activarUser(nif).subscribe((response: any) => {
      location.reload();
    })
  }

  eliminarUser(nif: string) {
    this.restBolsaService.eliminarUser(nif).subscribe((response: any) => {
      location.reload();
    })
  }
  
}
