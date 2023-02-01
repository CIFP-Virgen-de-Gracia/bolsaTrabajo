import { Component, OnInit } from '@angular/core';
import { RestEmpresasListadoService } from '../../services/rest-empresas-listado.service';
import { ListadoResponse } from '../../models/req-resp';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.scss']
})
export class ListadoEmpresasComponent implements OnInit {

  public empresas: any = [];

  constructor(private restListadoService: RestEmpresasListadoService) { }

  ngOnInit(): void {
    this.getListado();
  }

  public getListado() {

    this.restListadoService.getListado().subscribe((response) => {
        this.empresas = response;
      });
  }

}
