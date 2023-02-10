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
  constructor(private restBolsaService: RestBolsaService) { }

  ngOnInit(): void {
    this.getOfertasEmpresa();
  }

  public getOfertasEmpresa() {
    this.restBolsaService.getOfertaEmpresa('A11111111'!)
      .subscribe((response: OfertasResponse) => {
        this.ofertas = response
        console.log(response);
    })
  }

}
