//Realizado por Khattari
import { Component, OnInit } from '@angular/core';
import { RestBolsaService } from '../../../apiRest/services/rest-bolsa.service';
import { OfertasResponse } from '../../../interfaces/req-resp';
import { SocketService } from 'src/app/ofertas/apiRest/services/socket.service';

@Component({
  selector: 'app-ofertas-alumno',
  templateUrl: './ofertas-alumno.component.html',
  styleUrls: ['./ofertas-alumno.component.scss']
})
export class OfertasAlumnoComponent implements OnInit {

  public ofertas: any = [];
  p: number = 1;
  constructor(private restBolsaService: RestBolsaService,
              private socketService: SocketService) { }

  ngOnInit(): void {
    this.getOfertas();
    this.socketService.recibirNotificacion();
  }

  public getOfertas() {
    this.restBolsaService.getOfertas().subscribe((response: OfertasResponse) => {
      this.ofertas = response
      console.log(response);
    })
  }

}
