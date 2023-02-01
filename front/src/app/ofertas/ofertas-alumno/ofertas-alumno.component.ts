import { Component } from '@angular/core';
import { RestBolsaService } from '../apiRest/services/rest-bolsa.service';
import { OfertasResponse } from '../models/req-resp';

@Component({
  selector: 'app-ofertas-alumno',
  templateUrl: './ofertas-alumno.component.html',
  styleUrls: ['./ofertas-alumno.component.scss']
})
export class OfertasAlumnoComponent {

  public ofertas: any = [];
  constructor(private restBolsaService: RestBolsaService) { }

  ngOnInit(): void {
    this.getOfertas();
  }

  public getOfertas() {
    this.restBolsaService.getOfertas().subscribe((response: OfertasResponse) => {
      this.ofertas = response;
    })
  }

}
