import { Component, OnInit } from '@angular/core';
import { UserResponse } from 'src/app/administracion/interfaces/req-resp';
import { RestBolsaService } from 'src/app/administracion/services/rest-bolsa.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.scss']
})
export class EditarAdminComponent implements OnInit {

  nif!: string;
  datosUser!: UserResponse;
  userSend: UserResponse = {
    nif: '',
    nombre: '',
    email: '',
    password: '',
    status: 0,
    rol: 0,
    telefono: '',
  }

  constructor(private activatedRoute: ActivatedRoute,
              private restBolsaService: RestBolsaService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({nif}) => this.restBolsaService.getUser(nif)))
      .subscribe(
        (user) => {
          this.userSend = user
          this.nif = user.nif!;
        }
      )
  }

  guardar() {
    //Validacion
    if (this.userSend.nif?.trim().length === 0) return;
    if (this.userSend.nombre.trim().length === 0) return;
    if (this.userSend.email.trim().length === 0) return;
    if (this.userSend.password.trim().length === 0) return;
    if (this.userSend.telefono.trim().length === 0) return;

    this.restBolsaService.editarUser(this.userSend, this.nif)
      .subscribe(response => {
        location.reload();
      })
  }

}
