import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/ofertas/apiRest/services/socket.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private socketService: SocketService){}

  ngOnInit(): void {
    this.socketService.recibirNotificacion();
  }

  public abrir() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "block";
    let body = document.getElementsByTagName("body")[0];
    body!.style.overflow = "hidden";
  }

  cerrar() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "none";
  }
}
