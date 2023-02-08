import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]]
  })

  constructor(

    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) { }

  login() {

    const { email, password } = this.miFormulario.value;



    this.authService.login(email, password)
      .subscribe(ok => {
        if (ok === true) {
          this.router.navigateByUrl('/welcome');
        } else {
          window.alert("login correcto");
          this.router.navigateByUrl('/welcome');
        }
      });


    // .subscribe( resp => {
    //   if(resp.email, resp.password) {
    //     this.router.navigate(['./dashboard']);
    //   } else {
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Error',
    //       text: 'Usuario o contraseña incorrectos',
    //     })
    //   }
    // });

  }
}

