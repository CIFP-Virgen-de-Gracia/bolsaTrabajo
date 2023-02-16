//Realizado por Khattari
import { Component, OnInit } from '@angular/core';
import { RestBolsaService } from '../../../apiRest/services/rest-bolsa.service';
import { OfertasResponse } from '../../../interfaces/req-resp';

@Component({
  selector: 'app-listado-ofertas-empresa',
  templateUrl: './listado-ofertas-empresa.component.html',
  styleUrls: ['./listado-ofertas-empresa.component.scss']
})
export class ListadoOfertasEmpresa implements OnInit {

  public ofertas: any = [];
  public id_oferta: string = '';
  p: number = 1;
  constructor(private restBolsaService: RestBolsaService) { }

  ngOnInit(): void {
    this.getOfertasEmpresa();
  }

  public getOfertasEmpresa() {
    this.restBolsaService.getOfertaEmpresa('A11111111'!) //localStorage.getItem('nif_empresa')!
      .subscribe((response: OfertasResponse) => {
        this.ofertas = response
        console.log(response);
    })
  }

  public eliminarOferta() {
    this.restBolsaService.eliminarOferta(this.id_oferta)
      .subscribe((response) => {
        if (response.success) {
          this.cerrar()
          location.reload()
        }
      })
  }

  abrir(id: string) {
    this.id_oferta = id;
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
