import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegisterUser } from '../interface/iregister'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUsers: any;
  getItemFromLocalStorage: any;
  registerForm!: FormGroup; // property form

  constructor(private fb: FormBuilder) {
    this.registerForm =this.fb.group({
      nif:['',[Validators.required, Validators.pattern('[0-9]{8}[A-Z]' || '[0-9]{8}')]],
      nick: new FormControl('', Validators.required),
      email: ['', [Validators.required, Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]],
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    },
      {
        validators: this.passwordMatch('password', 'confirmPassword')
      })
  }

  ngOnInit() {
  }

  get f() { return this.registerForm.controls; }

  register() {
    const registerInfo: IRegisterUser = {
      'nif': this.registerForm.value.nif,
      'nick': this.registerForm.value.nick,
      'email': this.registerForm.value.email,
      'password': this.registerForm.value.password,
      'confirmPassword': this.registerForm.value.confirmPassword,
    };

    this.getItemFromLocalStorage = JSON.parse(localStorage.getItem('registerUsersLocalStorage')!);
    this.registerUsers = this.getItemFromLocalStorage ? this.getItemFromLocalStorage : []; // ternary operator
    this.registerUsers.push(registerInfo);
    localStorage.setItem("registerUsersLocalStorage", JSON.stringify(this.registerUsers));

  }

  passwordMatch(password: any, confirmPassword: any) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMatch']) {
        return;
      }
      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMatch: true });
      }
      else {
        confirmPasswordControl.setErrors(null);
      }
    }
  }


}
