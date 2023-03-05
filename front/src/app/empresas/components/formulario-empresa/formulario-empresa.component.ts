import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/empresa';
import { EmpresasService } from '../../services/empresas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.scss']
})
export class FormularioEmpresaComponent implements OnInit {

  empresaActual = new Empresa ('','','','','','')

  constructor(
    private empresasService: EmpresasService,
    private router: Router,

  )
  { }

  ngOnInit(): void {

  }

  guardarEmpresa(){
    console.log(this.empresaActual);
    Swal.fire({
      icon: 'success',
      title: 'Empresa Registrada',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
