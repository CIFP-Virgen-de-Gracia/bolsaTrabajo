import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasAlumnoComponent } from '../alumno/pages/ofertas-alumno/ofertas-alumno.component';
import { OfertasRoutingModule } from './ofertas-routing.module';
import { OfertasEmpresaComponent } from '../empresas/pages/ofertas-empresa/ofertas-empresa.component';
import { CreacionOfertaComponent } from '../empresas/pages/creacion-oferta/creacion-oferta.component';
import { ListadoOfertasEmpresa } from '../empresas/pages/listado-ofertas-empresa/listado-ofertas-empresa.component';
import { OfertaDetallesComponent } from '../alumno/pages/oferta-detalles/oferta-detalles.component';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { EdicionOfertaComponent } from '../empresas/pages/edicion-oferta/edicion-oferta.component';
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
