import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  RegisterForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {
    this.RegisterForm = this.fb.group({
      nif: [''],
      nick: [''],
      email: [''],
      password: [''],
      // mobile: [''],
    });
  }
  ngOnInit() {}
  register() {
    this.authService.register(this.RegisterForm.value).subscribe((res) => {
      if (res.result) {
        window.alert('Registro correcto')
        this.router.navigate(['/']);
      }
    });
  }
}

