import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public abrir() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "block";
    let body = document.getElementsByTagName("body")[0];
    body!.style.overflow = "hidden";
  }

  constructor(private socket: Socket) { }

  conectar() {
    this.socket.on('connect', () => {
      console.log('conectado')
    })
  }

  desconectar() {
    this.socket.on('disconnect', () => {
      console.log("Desconectado");
  });
  }

  mandarNotificacion(payload: any) {
    this.socket.emit('enviar-notificacion', payload, (msg_conf: any) => {
      console.log('enviado')
    });
  }

  recibirNotificacion() {
    this.socket.on('recibir-notificacion', (payload: any) => {
      this.abrir()
      console.log('Recibido de server: ', payload)
      return payload;
    })
  }
  
}
