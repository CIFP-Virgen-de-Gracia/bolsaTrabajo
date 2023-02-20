import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import {User}from '../../interface/interfaces'
import {SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user:User={
    nif: '',
    nick: '',
    email: '',
    password: '',
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
    this.authService.login(this.loginForm.value).subscribe((res) => {
      if (res) {
        window.alert('Login correcto')
        this.router.navigate(['/alumno/inicio']);
      }
      else{
        window.alert('Login incorrecto')
        this.router.navigate(['/welcome']);
      }
    });
  }
  loginGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
     this.socialAuthService.authState.subscribe((user) => {
        return this.authService.loginGoogle(user).subscribe((res: any) => {
         if (res) {
           window.alert('Login correcto');
           this.router.navigate(['/alumno/inicio']);
         }
         else {
           window.alert('Login incorrecto');
           this.router.navigate(['/welcome']);
         }
       });
      });
    });

}
}
