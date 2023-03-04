import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Empresa, FormularioContacto, UsuarioEmpresa } from '../interfaces/empresas.interface';


@Injectable({
  providedIn: 'root'
})

export class EmpresasService {

  public urlListado: string = "http://localhost:9090/api/empresa";
  public urlListadoUser: string = "http://localhost:9090/api/auth";
  public urlListadoFormContacto: string = 'http://localhost:9090/api/formContacto';



  //Prueba para pasar los datos del listado al formulario de contacto
  private formContactoCompartido: any;



  constructor(private http: HttpClient) { }

  //Datos empresa ------------------------------------
  public getUsuarioPorId(nif: string): Observable<UsuarioEmpresa>{
    return this.http.get<UsuarioEmpresa>(`${this.urlListadoUser}/${nif}`);
  }

  public getEmpresaPorId(nif: string): Observable<Empresa>{
    return this.http.get<Empresa>(`${this.urlListado}/${nif}`);
  }

  public modificarUsuario(usuario: UsuarioEmpresa): Observable<UsuarioEmpresa>{
    return this.http.put<UsuarioEmpresa>(`${this.urlListadoUser}/${usuario.nif}`,usuario);
  }

  public modificarEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.put<Empresa>(`${this.urlListado}/${empresa.nif}`,empresa);
  }

  //Listado empresas y usuarios ----------------------------
  public getListado() : Observable<Empresa> {
    return this.http.get<Empresa>(this.urlListado);
  }

  public getListadoUsers(): Observable<UsuarioEmpresa> {
    return this.http.get<UsuarioEmpresa>(this.urlListadoUser);
  }

  //Formulario contacto ------------------------------------
  public crearFormularioContacto(formulario: FormularioContacto): Observable<FormularioContacto> {
    return this.http.post<FormularioContacto>(this.urlListadoFormContacto, formulario);
  }

  //Listado de formularios de contactos ------------------------
  public getListadoFormContacto(): Observable<FormularioContacto> {
    return this.http.get<FormularioContacto>(this.urlListadoFormContacto);
  }


  //Metodos extras disponibles ------------------------------------
  public agregarEmpresa(empresa: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.urlListado, empresa);
  }

  public borrarEmpresa(nif: string): Observable<Empresa>{
    return this.http.delete<Empresa>(`${this.urlListado}/${nif}`);
  }

  public getFormContactoPorId(id: number): Observable<FormularioContacto> {
    return this.http.get<FormularioContacto>(`${this.urlListadoFormContacto}/${id}`);
  }



  //Probando llevar datos del listado de formularios de contacto al componente
  //del propio formulario de contacto
  public mostrarFormContacto(datos: any) {
    this.formContactoCompartido = datos;
    console.log(datos);
  }


}
