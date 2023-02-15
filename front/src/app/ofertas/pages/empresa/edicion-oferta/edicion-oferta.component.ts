import { Component, OnInit } from '@angular/core';
import { OfertasResponse } from 'src/app/ofertas/interfaces/req-resp';
import { RestBolsaService } from '../../../apiRest/services/rest-bolsa.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-edicion-oferta',
  templateUrl: './edicion-oferta.component.html',
  styleUrls: ['./edicion-oferta.component.scss']
})
export class EdicionOfertaComponent implements OnInit {

  ofertaGet!: OfertasResponse;

  oferta: OfertasResponse = {
    titulo: '',
    descripcion: '',
    lugar: '',
    presencial: '',
    jornada: '',
    nif_empresa: localStorage.getItem('nif_empresa')!
  }

  constructor(private activatedRoute: ActivatedRoute,
              private restBolsaService: RestBolsaService) {}

  
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.restBolsaService.getOferta(id)))
    .subscribe(
      (oferta) => {
        console.log(oferta);
        this.oferta = oferta;
      }
    )
  }

  guardar(){
    //Validacion
    if (this.oferta.titulo.trim().length === 0) return;
    if (this.oferta.descripcion.trim().length < 250) return;
    if (this.oferta.lugar.trim().length === 0) return;
    if (this.oferta.presencial.trim().length === 0) return;
    if (this.oferta.jornada.trim().length === 0) return;

    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.restBolsaService.editarOferta(this.oferta, id)))
    .subscribe( response => {
      console.log('editado');
      location.reload();
    }
    )
  }
}
