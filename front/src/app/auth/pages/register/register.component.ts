import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  getLocalStorage: any;
  Usuario: any;
  RegisterForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router
    ) {}
  ngOnInit() {
    this.RegisterForm =this.fb.group({
      nif:['',[Validators.required, Validators.pattern('[0-9]{8}[A-Z]' || '[0-9]{8}')]],
      nick: new FormControl('', Validators.required),
      email: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      password: new FormControl('', Validators.required),
    },
    );
  }

  register() {
    const { nif, nick, email , password } = this.RegisterForm.value;

    this.authService.register(this.RegisterForm.value).subscribe( res => {

      if (res) {
        this.router.navigateByUrl('/welcome');
        window.alert("Usuario Registrado");

      } else {
      this.router.navigateByUrl('/register');
       window.alert("Usuario no Registrado");

        }

      });

  }

  passwordIguales(pass1Name: string, pass2Name: string) {

      return (formGroup: FormGroup) => {

        const pass1Control = formGroup.controls[pass1Name];

        const pass2Control = formGroup.controls[pass2Name];

        if (pass1Control.value === pass2Control.value) {

          pass2Control.setErrors(null);

        } else {

          pass2Control.setErrors({ noEsIgual: true });

        }

      };

    }
}

