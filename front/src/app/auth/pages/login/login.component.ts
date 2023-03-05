import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {User}from '../../interface/interfaces'
import {SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import Swall from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user:User={
    nif: '',
    nombre: '',
    email: '',
    password: '',
    telefono: '',
    role: 2,
    token: '',
    Token: undefined
  }
  public loginForm!: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private socialAuthService: SocialAuthService,

  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  ngOnInit() {
  this.loginForm = this.fb.group({
    email:new FormControl('',[Validators.required,Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  })

  }
  login() {
    this.authService.login(this.loginForm.value).subscribe((response) => {
      if (response) {
       Swall.fire({
          icon: 'success',
          title: 'Login correcto',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/alumno/inicio']);
      }
      else if(response==undefined){
        Swall.fire({
          icon: 'error',
          title: 'Esta cuenta no existe',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/welcome']);

      }else if(response==false){
        Swall.fire({
          icon: 'error',
          title: 'Contraseña incorrecta',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/welcome']);
      }
      else if(response='unknown'){
        Swall.fire({
          icon: 'error',
          title: 'Hay un error en el servidor',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/welcome']);
      }
      else{
        Swall.fire({
          icon: 'error',
          title: 'Login incorrecto',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/welcome']);
      }
    });
  }
  loginGoogle() {
    const id_token = localStorage.getItem('id_token');
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
      this.user.email=userData.email;
      this.user.nombre=userData.name;
      this.user.password=userData.id;
      this.authService.loginGoogle(this.user).subscribe((response) => {

        if (response) {
          Swall.fire({
            icon: 'success',
            title: 'Login correcto',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/alumno/inicio']);
        }
    const  xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9090/api/auth/loginGoogle/callback');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);

  });
    });
  }
}
