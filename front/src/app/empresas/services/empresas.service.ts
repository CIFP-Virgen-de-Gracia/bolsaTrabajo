import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Empresa, UsuarioEmpresa } from '../interfaces/empresas.interface';


@Injectable({
  providedIn: 'root'
})

export class EmpresasService {

  public urlListado: string = "http://localhost:9090/api/empresa";
  public urlListadoUser: string = "http://localhost:9090/api/auth";

  constructor(private http: HttpClient) { }

  public getListado() : Observable<Empresa> {
    return this.http.get<Empresa>(this.urlListado);
  }

  public getUsuarioPorId(nif: string): Observable<UsuarioEmpresa>{
    return this.http.get<UsuarioEmpresa>(`${this.urlListadoUser}/${nif}`);
  }

  public getEmpresaPorId(nif: string): Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlListado}/${nif}`);
  }

  public AgregarEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.urlListado, empresa);
  }
  
  public ModificarEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.put<Empresa>(`${this.urlListado}/${empresa.nif}`,empresa);
  }

  public BorrarEmpresa(nif: string): Observable<Empresa>{
    return this.http.delete<Empresa>(`${this.urlListado}/${nif}`);
  }
}
