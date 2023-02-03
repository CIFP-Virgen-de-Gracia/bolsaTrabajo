import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/empresa';


@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.scss']
})
export class FormularioEmpresaComponent implements OnInit {

  empresaActual = new Empresa ('','','','','','')

  constructor() { }

  ngOnInit(): void {

  }

  formularioEnviado() { //Ver luego otro nombre mas pensado

    console.log("El formulario se envió y la empresa es ", this.empresaActual);

  }

}
