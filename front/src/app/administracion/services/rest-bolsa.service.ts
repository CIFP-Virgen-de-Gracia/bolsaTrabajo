//Realizado por Khattari
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse, EmpresaResponse, AlumnoResponse, } from '../interfaces/req-resp';
import { UserEmpresaResponse, UserAlumnoResponse } from '../interfaces/req-resp';

@Injectable({
    providedIn: 'root'
})

export class RestBolsaService {
    public urlAdmin: string = 'http://127.0.0.1:9090/admin';

    constructor(private http: HttpClient) { }

    public getUsers(user: UserResponse) {
        return this.http.get<UserResponse>(this.urlAdmin);
    }

    public getDatosEmpresa(nif: string) {
        return this.http.get<EmpresaResponse>(this.urlAdmin+'/empresas/datos'+nif);
    }

    public crearEmpresa(empresa: UserEmpresaResponse) {
        return this.http.post<any>(this.urlAdmin+'/empresas/crear', empresa);
    }

    public editarEmpresa(empresa: UserEmpresaResponse, nif: string) {
        return this.http.put<any>(this.urlAdmin+'/empresas/modificar/'+nif, empresa);
    }

    public getDatosAlumno(nif: string) {
        return this.http.get<AlumnoResponse>(this.urlAdmin+'/alumnos/datos'+nif);
    }

    public crearAlumno(alumno: UserAlumnoResponse) {
        return this.http.post<any>(this.urlAdmin+'/alumnos/crear', alumno);
    }

    public editarAlumno(alumno: UserAlumnoResponse, nif: string) {
        return this.http.put<any>(this.urlAdmin+'/empresas/modificar/'+nif, alumno);
    }

    public activarUser(nif: string) {
        return this.http.put<any>(this.urlAdmin+'/activar/'+nif, '');
    }

    public crearAdmin(user: UserResponse) {
        return this.http.post<any>(this.urlAdmin+'/admins/crear', user);
    }
}