//Realizado por Khattari
import { Component, OnInit } from '@angular/core';
import { UserAlumno2Response, UserAlumnoResponse } from 'src/app/administracion/interfaces/req-resp';
import { RestBolsaService } from 'src/app/administracion/services/rest-bolsa.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-alumno',
  templateUrl: './editar-alumno.component.html',
  styleUrls: ['./editar-alumno.component.scss']
})
export class EditarAlumnoComponent implements OnInit {

  nif!: string;
  datosAlumno!: UserAlumno2Response;
  alumnoSend: UserAlumnoResponse = {
    nif: '',
    nombre: '',
    email: '',
    password: '',
    status: 0,
    rol: 0,
    telefono: '',
    apellido1: '',
    apellido2: '',
  }

  constructor(private activatedRoute: ActivatedRoute,
              private restBolsaService: RestBolsaService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({nif}) => this.restBolsaService.getUser(nif)))
      .subscribe(
        (alumno) => {
          this.alumnoSend.nif = alumno.nif;
          this.nif = alumno.nif!;
          this.alumnoSend.nombre = alumno.nombre;
          this.alumnoSend.email = alumno.email;
          this.alumnoSend.password = alumno.password;
          this.alumnoSend.status = alumno.status;
          this.alumnoSend.rol = alumno.rol;
          this.alumnoSend.telefono = alumno.telefono;
        }
      )
    
    this.activatedRoute.params
      .pipe(switchMap(({nif}) => this.restBolsaService.getDatosAlumno(nif)))
      .subscribe(
        (alumno) => {
          this.alumnoSend.apellido1 = alumno.apellido1 || ''
          this.alumnoSend.apellido2 = alumno.apellido2 || ''
        }
      )
  }

  guardar() {
    //Validacion
    if (this.alumnoSend.nif?.trim().length === 0) return;
    if (this.alumnoSend.nombre.trim().length === 0) return;
    if (this.alumnoSend.email.trim().length === 0) return;
    if (this.alumnoSend.password.trim().length === 0) return;
    if (this.alumnoSend.telefono.trim().length === 0) return;

    this.restBolsaService.editarAlumno(this.alumnoSend, this.nif)
      .subscribe(response => {
        location.reload();
      })
  }
}
