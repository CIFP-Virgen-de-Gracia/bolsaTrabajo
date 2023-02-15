//Realizado por Khattari
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
    presencial: '',
    jornada: '',
  }

  constructor(private restBolsaService: RestBolsaService) {}

  ngOnInit(): void {

  }

  guardar(){
    
    //Validacion
    if (this.oferta.titulo.trim().length === 0) return;
    if (this.oferta.descripcion.trim().length === 0) return;
    if (this.oferta.lugar.trim().length === 0) return;
    if (this.oferta.presencial.trim().length === 0) return;
    if (this.oferta.jornada.trim().length === 0) return;

    this.restBolsaService.crearOferta(this.oferta)
      .subscribe( response => {
        console.log('creado');
      })
  }

}
