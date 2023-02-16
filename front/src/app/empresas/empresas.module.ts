import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormularioEmpresaComponent } from './components/formulario-empresa/formulario-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';
import { FormContactoEmpresaComponent } from './components/form-contacto-empresa/form-contacto-empresa.component';


@NgModule({
  declarations: [
    FormularioEmpresaComponent,
    ListadoEmpresasComponent,
    FormContactoEmpresaComponent
  ],
  imports: [
    SharedModule,
    EmpresasRoutingModule
  ],
  exports: [
  ]
})
export class EmpresasModule { }
