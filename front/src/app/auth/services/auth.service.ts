import { Injectable } from '@angular/core';
import { User } from '../interface/interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = environment.baseUrl + '/api/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  constructor(private http: HttpClient, public router: Router) {}

  // Registro*******************************
  register(user: User): Observable<any> {
    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }
  // Login********************************
  login(user: User) {

        // this.getUserProfile(res.nif).subscribe((res) => {
        //   this.currentUser = res;
        //   this.router.navigate(['/alumno/inicio' + res.msg]);
        // });

    return this.http.post<any>(`${this.endpoint}/login`, user).pipe(
      map((res) => {
        localStorage.setItem('Token', res.token);
        return res || {};
      }),
      catchError(this.handleError)
    );

      }

  getToken() {
    return localStorage.getItem('Token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('Token');
    return authToken == null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('Token');
    if (removeToken == null) {
      this.router.navigate(['/welcome']);
    }
  }
  validateToken() {


  }


  // User profile
  // getUserProfile(nif: any): Observable<any> {
  //   let api = `${this.endpoint}/${nif}`;
  //   return this.http.get(api, { headers: this.headers }).pipe(
  //     map((res) => {
  //       return res || {};
  //     }),
  //     catchError(this.handleError)
  //   );
  // }
  // Errores
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
