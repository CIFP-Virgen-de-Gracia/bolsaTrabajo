//Realizado por Khattari
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse, EmpresaResponse, AlumnoResponse, } from '../interfaces/req-resp';
import { UserEmpresaResponse, UserAlumnoResponse, UserEmpresa2Response, UserAlumno2Response } from '../interfaces/req-resp';

@Injectable({
    providedIn: 'root'
})

export class RestBolsaService {
    public urlAdmin: string = 'http://127.0.0.1:9090/admin';

    constructor(private http: HttpClient) { }

    public getUsers() {
        return this.http.get<UserResponse>(this.urlAdmin);
    }

    public getUser(nif: string) {
        return this.http.get<UserResponse>(this.urlAdmin+'/'+nif);
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
        console.log(this.urlAdmin+'/alumnos/datos'+nif)
        return this.http.get<AlumnoResponse>(this.urlAdmin+'/alumnos/datos/'+nif);
    }

    public crearAlumno(alumno: UserAlumnoResponse) {
        return this.http.post<any>(this.urlAdmin+'/alumnos/crear', alumno);
    }

    public editarAlumno(alumno: UserAlumnoResponse, nif: string) {
        console.log(this.urlAdmin+'/alumnos/modificar/'+nif, alumno)
        return this.http.put<any>(this.urlAdmin+'/alumnos/modificar/'+nif, alumno);
    }

    public activarUser(nif: string) {
        return this.http.put<any>(this.urlAdmin+'/activar/'+nif, '');
    }

    public crearAdmin(user: UserResponse) {
        return this.http.post<any>(this.urlAdmin+'/admins/crear', user);
    }

    public getEmpresas() {
        return this.http.get<UserEmpresa2Response>(this.urlAdmin+'/empresas');
    }

    public getAlumnos() {
        return this.http.get<UserAlumno2Response>(this.urlAdmin+'/alumnos');
    }

    public getAlumno(nif: string) {
        return this.http.get<UserAlumno2Response>(this.urlAdmin+'/alumnos/'+nif);
    }

    public eliminarUser(nif: string) {
        return this.http.delete<any>(this.urlAdmin+'/eliminar/'+nif);
    }

    public editarUser(user:UserResponse, nif: string) {
        return this.http.put<any>(this.urlAdmin+'/admins/modificar/'+nif, user);
    }
}