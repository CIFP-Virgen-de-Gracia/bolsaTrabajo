import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Empresa } from '../interfaces/empresas.interface';


@Injectable({
  providedIn: 'root'
})

export class EmpresasService {

  public urlListado: string = "http://localhost:9090/api/empresa";

  constructor(private http: HttpClient) { }

  public getListado() : Observable<Empresa> {
    return this.http.get<Empresa>(this.urlListado);
  }

  public getEmpresaPorId(id: string): Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlListado}/${id}`);
  }

  public AgregarEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.urlListado, empresa);
  }
  //Revisar el siguiente método:
  //public ModificarEmpresa(empresa: Empresa): Observable<Empresa>{
  //  return this.http.put<Empresa>(`${this.urlListado}/${empresa.id}`);
  //}

  public BorrarEmpresa(id: string): Observable<Empresa>{
    return this.http.delete<Empresa>(`${this.urlListado}/${id}`);
  }
}
