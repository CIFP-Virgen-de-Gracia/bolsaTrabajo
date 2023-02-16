import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }
  ngOnInit() {}
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
}
