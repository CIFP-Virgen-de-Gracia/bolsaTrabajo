import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { RestBolsaService } from '../../../ofertas/apiRest/services/rest-bolsa.service';
import { OfertasResponse, EmpresaResponse } from '../../../ofertas/interfaces/req-resp';
import { SocketService } from 'src/app/ofertas/apiRest/services/socket.service';

@Component({
  selector: 'app-oferta-detalles',
  templateUrl: './oferta-detalles.component.html',
  styleUrls: ['./oferta-detalles.component.scss']
})
export class OfertaDetallesComponent implements OnInit {

  oferta!: OfertasResponse;
  datos!: EmpresaResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private restBolsaService: RestBolsaService,
              private socketService: SocketService) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.restBolsaService.getOferta(id)))
    .subscribe(
      (oferta) => {
        this.oferta = oferta;
      }
    )

    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.restBolsaService.getDatosEmpresa(id)))
    .subscribe(
      (datos) => {
        this.datos = datos;
      }
    )

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
