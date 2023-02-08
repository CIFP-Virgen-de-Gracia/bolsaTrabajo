import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasResponse, EmpresaResponse } from '../../interfaces/req-resp';

@Injectable({
  providedIn: 'root'
})
export class RestBolsaService {

  public urlOfertas: string = 'http://127.0.0.1:9090/ofertas';
  public urlOfertasEmpresas: string = 'http://127.0.0.1:9090/empresaoferta';

  constructor(private http: HttpClient) { }

  public getOfertas() {
    return this.http.get<OfertasResponse>(this.urlOfertas);
  }

  public getOferta(id: string) {
    return this.http.get<OfertasResponse>(this.urlOfertas+'/'+id);
  }

  public getDatosEmpresa(id: string) {
    return this.http.get<EmpresaResponse>(this.urlOfertasEmpresas+'/datosempresa/'+id);
  }

  public crearOferta(oferta: OfertasResponse) {
    return this.http.post<any>(this.urlOfertas+'/crear', oferta);
  }
}
