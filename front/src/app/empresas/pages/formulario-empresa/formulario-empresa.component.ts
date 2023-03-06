import { Component, OnInit } from '@angular/core';
import { Empresa, UsuarioEmpresa } from '../../interfaces/empresas.interface';
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
    cargo: ''
  }

  usuarioActual: UsuarioEmpresa = {
    nif: '',
    nombre: '',
    email: '',
    password: '',
    status: 0,
    rol: 0,
    telefono: ''
  }

  constructor(private empresasService: EmpresasService) {

    //A la espera del LocalStorage, paso en nif por argumento a pelo para poder desarrollar
    //Modificar cuando tengamos el LocalStorage funcionando
    this.getUsuarioPorId('A11111111');
    this.getEmpresaPorId('A11111111');
  }

  ngOnInit(): void {

  }

  public getUsuarioPorId(nif: string) {
    this.empresasService.getUsuarioPorId(nif).subscribe((response) => {
      this.usuarioActual = response;
      //console.log(this.usuarioActual);
    })
  }

  public getEmpresaPorId(nif: string) {
    this.empresasService.getEmpresaPorId(nif).subscribe((response) => {
      this.empresaActual = response;
      //console.log(this.empresaActual);
      //console.log(this.empresaActual.nombre);
    });
  }

  public guardar() {
    //TODO Falta poner un alert que pregunte si se quieren confirmar los cambios
    this.empresasService.modificarUsuario(this.usuarioActual).subscribe((response) => {
      console.log(response);
    })
    this.empresasService.modificarEmpresa(this.empresaActual).subscribe((response) => {
      console.log(response);
    })
    location.reload();
  }

  public recargar() {
    location.reload();
  }

}
