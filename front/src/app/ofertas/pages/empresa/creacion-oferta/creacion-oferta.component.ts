import { Component, OnInit } from '@angular/core';
import { OfertasResponse } from 'src/app/ofertas/interfaces/req-resp';
import { RestBolsaService } from '../../../apiRest/services/rest-bolsa.service';

@Component({
  selector: 'app-creacion-oferta',
  templateUrl: './creacion-oferta.component.html',
  styleUrls: ['./creacion-oferta.component.scss']
})
export class CreacionOfertaComponent implements OnInit {

  oferta: OfertasResponse = {
    titulo: '',
    descripcion: '',
    lugar: '',
    presencial: 0,
    jornada: '',
  }

  constructor(private restBolsaService: RestBolsaService) {}

  ngOnInit(): void {

  }

  guardar(){
    this.restBolsaService.crearOferta(this.oferta)
      .subscribe( heroe => {
        console.log('creado');
      })
  }

}
