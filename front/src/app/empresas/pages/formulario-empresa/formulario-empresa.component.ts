import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../interfaces/empresas.interface';
import { EmpresasService } from '../../services/empresas.service';



@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.scss']
})
export class FormularioEmpresaComponent implements OnInit {

  empresaActual: Empresa = {
  nif: '',
  nombre: '',
  direccion: '',
  contacto: '',
  cargo: '',
  telefono: ''
  }

  constructor(private empresasService: EmpresasService) {

    this.getEmpresaPorId('A11111111');
  }

  ngOnInit(): void {

  }

  public getEmpresaPorId (nif: string) {
    this.empresasService.getEmpresaPorId(nif).subscribe((response) => {
      this.empresaActual = response;
      console.log(this.empresaActual);
      console.log(this.empresaActual.nombre);
    });
  }


  formularioEnviado() { //Ver luego otro nombre mas pensado
    console.log("El formulario se envió y la empresa es ", this.empresaActual);
  }

}
