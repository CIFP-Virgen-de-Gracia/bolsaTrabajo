import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListadoResponse } from '../models/req-resp';

@Injectable({
  providedIn: 'root'
})
export class RestEmpresasListadoService {

  public urlListado: string = "http://localhost:9090/api/empresa";

  constructor(private http: HttpClient) { }

  public getListado()
  {
    return this.http.get<ListadoResponse>(this.urlListado);
  }

}
