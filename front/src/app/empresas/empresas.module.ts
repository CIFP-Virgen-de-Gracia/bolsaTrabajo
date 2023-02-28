import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormularioEmpresaComponent } from './pages/formulario-empresa/formulario-empresa.component';
import { ListadoEmpresasComponent } from './pages/listado-empresas/listado-empresas.component';
import { FormContactoEmpresaComponent } from './pages/form-contacto-empresa/form-contacto-empresa.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormularioEmpresaComponent,
    ListadoEmpresasComponent,
    FormContactoEmpresaComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    EmpresasRoutingModule
  ],
  exports: [
  ]
})
export class EmpresasModule { }
