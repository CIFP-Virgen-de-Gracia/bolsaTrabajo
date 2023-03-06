//Realizado por Khattari
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { RestBolsaService } from '../../../apiRest/services/rest-bolsa.service';
import { OfertasResponse, EmpresaResponse } from '../../../interfaces/req-resp';

@Component({
  selector: 'app-oferta-detalles',
  templateUrl: './oferta-detalles.component.html',
  styleUrls: ['./oferta-detalles.component.scss']
})
export class OfertaDetallesComponent implements OnInit {

  oferta!: OfertasResponse;
  datos!: EmpresaResponse;

  constructor(private activatedRoute: ActivatedRoute,
              private restBolsaService: RestBolsaService) {}

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
    
  }

}
