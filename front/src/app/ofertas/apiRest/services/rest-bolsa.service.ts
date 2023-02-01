import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfertasResponse } from '../../ofertas-alumno/models/req-resp';

@Injectable({
  providedIn: 'root'
})
export class RestBolsaService {

  public urlOfertas: string = 'http://127.0.0.1:9090/ofertas';

  constructor(private http: HttpClient) { }

  public getOfertas() {
    return this.http.get<OfertasResponse>(this.urlOfertas);
  }
}
