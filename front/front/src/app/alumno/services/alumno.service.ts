import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../interfaces/alumno.interface';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseURL: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAlumnoNif(nif: string): Observable<Alumno>{
    return this.http.get<Alumno>(`${this.baseURL}/alumnos/${nif}`);
  }

}
