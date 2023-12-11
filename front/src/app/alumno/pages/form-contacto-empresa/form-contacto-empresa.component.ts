import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-contacto-empresa',
  templateUrl: './form-contacto-empresa.component.html',
  styleUrls: ['./form-contacto-empresa.component.scss']
})
export class FormContactoEmpresaComponent implements OnInit {


  ngOnInit(): void {
  }

  public crear() {
    this.limpiar();
  }

  public limpiar() {
    location.reload();
  }

}
