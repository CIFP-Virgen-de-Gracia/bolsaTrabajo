//Realizado por Khattari
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'; 

@Injectable({
  providedIn: 'root'
})
export class SocketService {

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
      console.log('Recibido de server: ', payload)
    })
  }
  
}
