//Realizado por Khattari
import { Component, OnInit } from '@angular/core';
import { UserEmpresaResponse } from 'src/app/administracion/interfaces/req-resp';
import { RestBolsaService } from 'src/app/administracion/services/rest-bolsa.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.scss']
})
export class EditarEmpresaComponent implements OnInit {

  nif!: string;
  empresaSend: UserEmpresaResponse = {
    nif: '',
    nombre: '',
    email: '',
    password: '',
    status: 0,
    rol: 0,
    telefono: '',
    direccion: '',
    contacto: '',
    cargo: '',
  }

  constructor(private activatedRoute: ActivatedRoute,
              private restBolsaService: RestBolsaService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({nif}) => this.restBolsaService.getUser(nif)))
      .subscribe(
        (empresa) => {
          this.empresaSend.nif = empresa.nif;
          this.nif = empresa.nif!;
          this.empresaSend.nombre = empresa.nombre;
          this.empresaSend.email = empresa.email;
          this.empresaSend.password = empresa.password;
          this.empresaSend.status = empresa.status;
          this.empresaSend.rol = empresa.rol;
          this.empresaSend.telefono = empresa.telefono;
        }
      )

    this.activatedRoute.params
      .pipe(switchMap(({nif}) => this.restBolsaService.getDatosEmpresa(nif)))
      .subscribe(
        (empresa) => {
          this.empresaSend.direccion = empresa.direccion || ''
          this.empresaSend.contacto = empresa.contacto || ''
          this.empresaSend.cargo = empresa.cargo || ''
        }
      )
  }

  guardar() {
    //Validacion
    if (this.empresaSend.nif?.trim().length === 0) return;
    if (this.empresaSend.nombre.trim().length === 0) return;
    if (this.empresaSend.email.trim().length === 0) return;
    if (this.empresaSend.password.trim().length === 0) return;
    if (this.empresaSend.telefono.trim().length === 0) return;

    this.restBolsaService.editarEmpresa(this.empresaSend, this.nif)
      .subscribe(response => {
        location.reload();
      })
  }

}
