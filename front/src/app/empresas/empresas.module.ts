import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { EmpresasRoutingModule } from './empresas-routing.module';

import { FormularioEmpresaComponent } from './pages/formulario-empresa/formulario-empresa.component';
import { InterfazEmpresaComponent } from './pages/interfaz-empresa/interfaz-empresa.component';
import { FormContactoEmpresaComponent } from './pages/form-contacto-empresa/form-contacto-empresa.component';
import { ListadoEmpresasComponent } from './pages/listado-empresas/listado-empresas.component';
import { InicioEmpresaComponent } from './pages/inicio-empresa/inicio-empresa.component';
import { ListadoFormContactoComponent } from './pages/listado-form-contacto/listado-form-contacto.component';


@NgModule({
  declarations: [
    FormularioEmpresaComponent,
    ListadoEmpresasComponent,
    FormContactoEmpresaComponent,
    InterfazEmpresaComponent,
    InicioEmpresaComponent,
    ListadoFormContactoComponent
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
