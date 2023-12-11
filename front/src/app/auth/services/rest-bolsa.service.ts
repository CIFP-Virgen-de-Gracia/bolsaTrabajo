import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserResponse, EmpresaResponse, AlumnoResponse, } from '../interface/req-resp';
import { UserEmpresaResponse, UserAlumnoResponse, UserEmpresa2Response, UserAlumno2Response } from '../interface/req-resp';

@Injectable({
    providedIn: 'root'
})

export class RestBolsaService {
    public urlAuth: string = 'http://127.0.0.1:9090/auth';

    constructor(private http: HttpClient) { }

    public getUsers() {
        return this.http.get<UserResponse>(this.urlAuth);
    }

    public getUser(nif: string) {
        return this.http.get<UserResponse>(this.urlAuth+'/'+nif);
    }

    public getDatosEmpresa(nif: string) {
        return this.http.get<EmpresaResponse>(this.urlAuth+'/empresas/datos/'+nif);
    }

    public crearEmpresa(empresa: UserEmpresaResponse) {
        return this.http.post<any>(this.urlAuth+'/empresas/crear', empresa);
    }

    public editarEmpresa(empresa: UserEmpresaResponse, nif: string) {
        return this.http.put<any>(this.urlAuth+'/empresas/modificar/'+nif, empresa);
    }

    public getDatosAlumno(nif: string) {
        return this.http.get<AlumnoResponse>(this.urlAuth+'/alumnos/datos/'+nif);
    }

    public crearAlumno(alumno: UserAlumnoResponse) {
        return this.http.post<any>(this.urlAuth+'/alumnos/crear', alumno);
    }

    public editarAlumno(alumno: UserAlumnoResponse, nif: string) {
        return this.http.put<any>(this.urlAuth+'/alumnos/modificar/'+nif, alumno);
    }

    public activarUser(nif: string) {
        return this.http.put<any>(this.urlAuth+'/activar/'+nif, '');
    }

    public crearAdmin(user: UserResponse) {
        return this.http.post<any>(this.urlAuth+'/admins/crear', user);
    }

    public getEmpresas() {
        return this.http.get<UserEmpresa2Response>(this.urlAuth+'/empresas');
    }

    public getAlumnos() {
        return this.http.get<UserAlumno2Response>(this.urlAuth+'/alumnos');
    }

    public getAlumno(nif: string) {
        return this.http.get<UserAlumno2Response>(this.urlAuth+'/alumnos/'+nif);
    }

    public eliminarUser(nif: string) {
        return this.http.delete<any>(this.urlAuth+'/eliminar/'+nif);
    }

    public editarUser(user:UserResponse, nif: string) {
        return this.http.put<any>(this.urlAuth+'/admins/modificar/'+nif, user);
    } 

    public login(user: any) {
        return this.http.post<any>(this.urlAuth+'/login', user);
    }
}