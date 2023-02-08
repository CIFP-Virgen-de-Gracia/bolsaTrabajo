import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    nif: [ '', [ Validators.required, Validators.minLength(3) ] ],
    nick: [ '', [ Validators.required, Validators.minLength(2) ] ],
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength(4) ] ],
    // confirmPassword: [ '', [ Validators.required, Validators.minLength(4) ] ],
  })

  constructor(

    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService

  ) { }

  registro () {
    const { nif, nick, email , password } = this.miFormulario.value;

    this.authService.registro( nif, nick, email, password).subscribe( ok => {

      if ( ok === true ) {

        this.router.navigateByUrl('/welcome');

      } else {
      this.router.navigateByUrl('/welcome');
       window.alert("Usuario Registrado");

        }

      });

  }


}
