import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasAlumnoComponent } from './pages/alumno/ofertas-alumno/ofertas-alumno.component';
import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasEmpresaComponent } from './pages/empresa/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from './pages/empresa/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from './pages/empresa/listado-ofertas-empresa/listado-ofertas-empresa.component';
import { OfertaDetallesComponent } from './pages/alumno/oferta-detalles/oferta-detalles.component';

@NgModule({
  declarations: [
    OfertasAlumnoComponent,
    OfertasEmpresaComponent,
    CreacionOfertaComponent,
    ListadoOfertasEmpresa,
    OfertaDetallesComponent
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
