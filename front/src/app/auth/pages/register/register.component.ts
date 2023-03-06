//Ines
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  private fileTemp: any;

  RegisterForm!: FormGroup;
  title = 'fileUpload';
  images = "";
  imagenes: any = [];
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,

  ) { }
  ngOnInit() {
    this.RegisterForm = this.fb.group({
      nif: ['', [Validators.required, Validators.pattern('[0-9]{8}[A-Z]' || '[0-9]{8}')]],
      nombre: new FormControl('', Validators.required),
      email: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      password: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      rol: new FormControl('', Validators.pattern('[0-3]{1,2}')),
    },
    );

  }
  register() {
    const { nif, nombre, email, password, telefono, rol, avatar } = this.RegisterForm.value;

    this.authService.register(this.RegisterForm.value).subscribe(res => {

      if (res) {
        this.router.navigateByUrl('/welcome');
        Swal.fire({
          icon: 'success',
          title: 'Usuario Registrado',
          showConfirmButton: false,
          timer: 1500
        })
      }
      else if (res == undefined) {
        Swal.fire({
          icon: 'error',
          title: 'Este usuario ya existe',
          showConfirmButton: false,
          timer: 1500
        })


      } else {
        this.router.navigateByUrl('/register');
        Swal.fire({
          icon: 'error',
          title: 'Este usuario ya existe',
          showConfirmButton: false,
          timer: 1500
        })

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
  //funciones para subir y mostrar imágenes u otros archivos*************************
  getFile($event: any): void {
    this.fileTemp = $event.target.files[0];
    console.log(this.fileTemp);

  }

  sendFile(): void {
    const formData = new FormData();
    formData.append('file', this.fileTemp);
    this.authService.subirImagen(formData).subscribe(res => {
      console.log(res);
      this.RegisterForm.patchValue({
        imagen: res
      });
    });
  }

  //Roles
  getRoles() {
    return this.authService.getRoles();
  }


}

