import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasResponse } from '../../interfaces/req-resp';

@Injectable({
  providedIn: 'root'
})
export class RestBolsaService {

  public urlOfertas: string = 'http://127.0.0.1:9090/ofertas';

  constructor(private http: HttpClient) { }

  public getOfertas() {
    return this.http.get<OfertasResponse>(this.urlOfertas);
  }

  public getOferta(id: string) {
    return this.http.get<OfertasResponse>(this.urlOfertas+'/'+id);
  }

  public crearOferta(oferta: OfertasResponse) {
    return this.http.post<any>(this.urlOfertas+'/crear', oferta);
  }
}
