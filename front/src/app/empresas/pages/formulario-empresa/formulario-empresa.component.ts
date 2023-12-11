import { Component, OnInit } from '@angular/core';
import { Empresa, UsuarioEmpresa } from '../../interfaces/empresas.interface';
import { EmpresasService } from '../../services/empresas.service';



@Component({
  selector: 'app-formulario-empresa',
  templateUrl: './formulario-empresa.component.html',
  styleUrls: ['./formulario-empresa.component.scss']
})
export class FormularioEmpresaComponent{

  user = JSON.parse(localStorage.getItem('user') || '{}')

  public recargar() {
    location.reload();
  }

}
