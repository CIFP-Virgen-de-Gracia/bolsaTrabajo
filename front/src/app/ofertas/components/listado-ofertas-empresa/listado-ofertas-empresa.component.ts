import { Component, OnInit } from '@angular/core';
import { RestBolsaService } from '../../apiRest/services/rest-bolsa.service';
import { OfertasResponse } from '../../models/req-resp';

@Component({
  selector: 'app-listado-ofertas-empresa',
  templateUrl: '../ofertas-alumno/ofertas-alumno.component.html',
  styleUrls: ['../ofertas-alumno/ofertas-alumno.component.scss']
})
export class ListadoOfertasEmpresa implements OnInit {

  public ofertas: any = [];
  constructor(private restBolsaService: RestBolsaService) { }

  ngOnInit(): void {
    this.getOfertas();
  }

  public getOfertas() {
    this.restBolsaService.getOfertas().subscribe((response: OfertasResponse) => {
      this.ofertas = response
      console.log(response);
    })
  }

}
