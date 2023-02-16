import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormularioEmpresaComponent } from './components/formulario-empresa/formulario-empresa.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';


@NgModule({
  declarations: [
    FormularioEmpresaComponent,
    ListadoEmpresasComponent
  ],
  imports: [
    SharedModule,
    EmpresasRoutingModule
  ],
  exports: [
  ]
})
export class EmpresasModule { }
