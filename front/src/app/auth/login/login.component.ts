import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService}from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm!: FormGroup;
  constructor(private authService:AuthService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      password: ['', [Validators.required]]
    })
  }

  logIn() {
    const loginEmail = (document.getElementById("inputEmail") as HTMLInputElement).value;
    const loginPass = (document.getElementById("inputPassword") as HTMLInputElement).value;

    // Mirar si está registrado
    if (localStorage.getItem('registerUsersLocalStorage')) {

      const allStoredUsers = JSON.parse(localStorage.getItem('registerUsersLocalStorage')!);
      // Encontrar si el email y la contraseña coinciden con los datos guardados en el local storage
      const matchedUser = allStoredUsers.filter((registerInfo: any) => {
        return loginEmail === registerInfo.email && loginPass === registerInfo.password;
      });

      //Encontrar el usuario que ha iniciado sesión
      const loginUserData = allStoredUsers.filter((x: any) => {
        if (loginEmail === x.email && loginPass === x.password) {
          return x;
        }
      });

      //Guardar el id del usuario en una variable
      const loginUserID = loginUserData[0].id;

      // TODO: FALTA HACER LA PÁGINA LOGIN SUCCESS
      if (matchedUser.length) {
        this.authService.login(loginUserID);
        // this.router.navigate(['/loginSuccessful', loginUserID]);
        return loginUserID;
      }
      else {
        window.alert("Datos erróneos");
      }

    }
    else {
      // console.log('error');
      window.alert("No hay Datos");

    }
  }


}
