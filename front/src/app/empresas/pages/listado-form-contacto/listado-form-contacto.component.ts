import { Component, OnInit } from '@angular/core';
import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-listado-form-contacto',
  templateUrl: './listado-form-contacto.component.html',
  styleUrls: ['./listado-form-contacto.component.scss']
})
export class ListadoFormContactoComponent implements OnInit {

  public formulariosContacto: any = [];

  constructor(private empresasService: EmpresasService) {
  }

  ngOnInit(): void {
    this.getListadoFormContactos();
  }

  public getListadoFormContactos() {
    this.empresasService.getListadoFormContacto().subscribe((response) => {
      this.formulariosContacto = response;
    });
  }



  
  //Para enviar info al componente del formulario
  public detalleFormContacto (formulariosContacto: any) {

    //console.log(formulariosContacto);

    this.empresasService.mostrarFormContacto(formulariosContacto);

  }

}
