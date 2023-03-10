import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.scss']
})
export class ListadoEmpresasComponent implements OnInit {

  public empresas: any = [];
  public usuarios: any = [];

  constructor(private empresasService: EmpresasService) { }

  ngOnInit(): void {
    this.getListado();
    this.getListadoUsers();
  }

  public getListado() {

    this.empresasService.getListado().subscribe((response) => {
        this.empresas = response;
      });
  }

  public getListadoUsers() {
    this.empresasService.getListadoUsers().subscribe((response) => {
      this.usuarios = response;
    })
  }

}
