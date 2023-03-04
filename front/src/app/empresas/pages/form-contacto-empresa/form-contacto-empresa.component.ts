import { Component, OnInit } from '@angular/core';
import { FormularioContacto } from '../../interfaces/empresas.interface';
import { EmpresasService } from '../../services/empresas.service';

@Component({
  selector: 'app-form-contacto-empresa',
  templateUrl: './form-contacto-empresa.component.html',
  styleUrls: ['./form-contacto-empresa.component.scss']
})
export class FormContactoEmpresaComponent implements OnInit {

  formularioContactoActual: FormularioContacto = {
    id: 0,
    nif: '',
    nombre: '',
    email: '',
    telefono: '',
    observaciones: ''
  }

  constructor(private empresasService: EmpresasService) {
  }

  ngOnInit(): void {
  }

  public crear() {
    //TODO poner un alert para preguntar si quiere enviar el formulario

    //Preparo este formulario, en principio con la intención que NO solo sea accesible
    // por los usuarios de la aplicación, sino para que se pueda acceder desde fuera.
    // por eso estos if que aqui pongo serán revisables cuando se decida desde donde
    // se puede acceder. Se pondrá en el label los campos que serán obligatorios.

    if ((this.formularioContactoActual.nombre.trim().length === 0) ||
      (this.formularioContactoActual.email.trim().length === 0) ||
      (this.formularioContactoActual.telefono.trim().length === 0) ||
      (this.formularioContactoActual.observaciones.trim().length === 0)) {
      console.log('Alguno de los campos obligatorios no está relleno');
      return;
    };

    this.empresasService.crearFormularioContacto(this.formularioContactoActual)
      .subscribe((response) => {
        console.log('Formulario creado');
      });
    //TODO otro alert que avise de que el formulario se ha enviado con exito
    this.limpiar();
  }

  public limpiar() {
    location.reload();
  }

}
