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
  
}
