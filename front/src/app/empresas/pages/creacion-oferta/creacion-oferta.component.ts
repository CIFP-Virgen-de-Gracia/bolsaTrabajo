import { Component, OnInit } from '@angular/core';
import { OfertasResponse } from 'src/app/ofertas/interfaces/req-resp';
import { RestBolsaService } from '../../../ofertas/apiRest/services/rest-bolsa.service';
import { SocketService } from 'src/app/ofertas/apiRest/services/socket.service';

@Component({
  selector: 'app-creacion-oferta',
  templateUrl: './creacion-oferta.component.html',
  styleUrls: ['./creacion-oferta.component.scss']
})
export class CreacionOfertaComponent implements OnInit {

  public user = JSON.parse(localStorage.getItem('user') || '{}')

  oferta: OfertasResponse = {
    titulo: '',
    descripcion: '',
    lugar: '',
    presencial: 0,
    jornada: '',
    nif_empresa: this.user[0].nif
  }

  constructor(private restBolsaService: RestBolsaService,
              private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.conectar();
    this.socketService.desconectar();
  }

  guardar(){
    //Validacion
    if (this.oferta.titulo.trim().length === 0) return;
    if (this.oferta.descripcion.trim().length === 0) return;
    if (this.oferta.lugar.trim().length === 0) return;
    if (this.oferta.presencial === null) return;
    if (this.oferta.jornada.trim().length === 0) return;

    this.restBolsaService.crearOferta(this.oferta)
      .subscribe( response => {
        this.abrir()
        this.socketService.mandarNotificacion(this.oferta)
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
    location.replace('http://localhost:4200/empresas/ofertas')
  }

}
