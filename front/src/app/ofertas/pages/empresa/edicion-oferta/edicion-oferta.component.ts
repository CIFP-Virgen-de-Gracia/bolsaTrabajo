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
    presencial: 0,
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
        this.oferta = oferta;
        console.log(this.oferta.presencial)
        let radioNo = document.getElementById('opcionNo') as HTMLInputElement
        let radioSi = document.getElementById('opcionSi') as HTMLInputElement
        switch (this.oferta.presencial) {
          case 0:
            radioNo.checked = true;
            break;
          case 1:
            radioSi.checked = true;
            break;
        }
      }
    )
  }

  guardar(){
    //Validacion
    if (this.oferta.titulo.trim().length === 0) return;
    if (this.oferta.descripcion.trim().length < 250) return;
    if (this.oferta.lugar.trim().length === 0) return;
    if (this.oferta.presencial === null) return;
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
