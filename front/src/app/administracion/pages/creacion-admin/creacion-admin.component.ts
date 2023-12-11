import { Component, OnInit } from '@angular/core';
import { UserResponse } from '../../interfaces/req-resp';
import { RestBolsaService } from '../../services/rest-bolsa.service';

@Component({
  selector: 'app-creacion-admin',
  templateUrl: './creacion-admin.component.html',
  styleUrls: ['./creacion-admin.component.scss']
})
export class CreacionAdminComponent implements OnInit {

  user: UserResponse = {
    nif:         '',
    nombre:      '',
    email:       '',
    password:    '',
    status:      1,
    rol:         1,
    telefono:    '',
  }

  constructor(private restBolsaService: RestBolsaService) {}

  ngOnInit(): void {

  }

  guardarUser() {
    //Validacion
    if (this.user.nif?.trim().length === 0) return;
    if (this.user.nombre.trim().length === 0) return;
    if (this.user.email.trim().length === 0) return;
    if (this.user.password.trim().length === 0) return;
    if (this.user.telefono.trim().length === 0) return;

    this.restBolsaService.crearAdmin(this.user)
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
