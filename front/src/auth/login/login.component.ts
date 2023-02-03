import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm!: FormGroup; // property form
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.logInForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      password: ['', [Validators.required]]
    })
  }

  logIn() {
    const loginEmail = (document.getElementById("inputEmail") as HTMLInputElement).value;
    const loginPass = (document.getElementById("inputPassword") as HTMLInputElement).value;

    // Comprobamos que existe el ususario en el local storage
    if (localStorage.getItem('registerUsersLocalStorage')) {

      const allStoredUsers = JSON.parse(localStorage.getItem('registerUsersLocalStorage')!);
      // Comprobamos el password y el email
      const matchedUser = allStoredUsers.filter((registerInfo: any) => {
        return loginEmail === registerInfo.email && loginPass === registerInfo.password;
      });

      // Localizamos los datos
      const loginUserData = allStoredUsers.filter((x: any) => {
        if (loginEmail === x.email && loginPass === x.password) {
          return x;
        }
      });

      //Guardamos los datos en una variable
      const loginUserID = loginUserData[0].id;

      // Condición para redirigir a la página de login
      if (matchedUser.length) {
        this.router.navigate(['/loginSuccessful', loginUserID]);
        return loginUserID;
      }
      else {
        window.alert("wrong crendential");
      }

    }
    else {
      // console.log('Wrong credentials');
      window.alert("Database not exist");

    }
  }


}
