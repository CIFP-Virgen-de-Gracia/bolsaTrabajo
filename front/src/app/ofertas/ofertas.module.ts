import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasAlumnoComponent } from './components/ofertas-alumno/ofertas-alumno.component';
import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasEmpresaComponent } from './components/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from './components/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from './components/listado-ofertas-empresa/listado-ofertas-empresa.component';

@NgModule({
  declarations: [
    OfertasAlumnoComponent,
    OfertasEmpresaComponent,
    CreacionOfertaComponent,
    ListadoOfertasEmpresa
  ],
  exports: [
    OfertasAlumnoComponent,
    OfertasEmpresaComponent,
    CreacionOfertaComponent,
    ListadoOfertasEmpresa
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule
  ]
})

export class OfertasModule { }
