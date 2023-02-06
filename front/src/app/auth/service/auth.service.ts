import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
private uri = 'http://localhost:9090/api/auth';
private token:any ="";
errorMessage:string = "";

  constructor( private http:HttpClient, private router:Router) { }

  registerUser(user:any):Observable<any>{
  localStorage.setItem('registerUsersLocalStorage', JSON.stringify(user));
  return this.http.post(`${this.uri}/register`, user);
  }

  login( user:any):Observable<any>{
    return this.http.post(`${this.uri}/login`, user);

  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getProfile(){
    return this.http.get(`${this.uri}/profile`);
  }
  errorHandler(error:HttpErrorResponse){
    this.errorMessage = error.error.message;
    window.alert(this.errorMessage);
  }
}
