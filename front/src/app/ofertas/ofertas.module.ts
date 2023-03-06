//Realizado por Khattari
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasAlumnoComponent } from './pages/alumno/ofertas-alumno/ofertas-alumno.component';
import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasEmpresaComponent } from './pages/empresa/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from './pages/empresa/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from './pages/empresa/listado-ofertas-empresa/listado-ofertas-empresa.component';
import { OfertaDetallesComponent } from './pages/alumno/oferta-detalles/oferta-detalles.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { EdicionOfertaComponent } from './pages/empresa/edicion-oferta/edicion-oferta.component';
import { SharedModule } from '../shared/shared.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {
		transports: ['websocket']
	}
}

@NgModule({
  declarations: [
    OfertasAlumnoComponent,
    OfertasEmpresaComponent,
    CreacionOfertaComponent,
    ListadoOfertasEmpresa,
    OfertaDetallesComponent,
    EdicionOfertaComponent
  ],
  exports: [
    OfertasAlumnoComponent,
    OfertasEmpresaComponent,
    CreacionOfertaComponent,
    ListadoOfertasEmpresa
  ],
  imports: [
    CommonModule,
    OfertasRoutingModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule,
    SocketIoModule.forRoot(config), 
  ]
})

export class OfertasModule { }
