import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestBolsaService } from '../../services/rest-bolsa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  response: any = 'ghj';

  constructor(
    public router: Router,
    private restBolsaService: RestBolsaService
  ) { }

  ngOnInit() {}

  login() {
    if (this.user.email.trim().length === 0) return;
    if (this.user.password.trim().length === 0) return;

    this.restBolsaService.login(this.user)
    .subscribe(response => {
      this.response = response
      if (!response.success) {
        this.abrir();
      }
      else {
        localStorage.setItem('rol', response.data[0].rol);
        localStorage.setItem('user', JSON.stringify(response.data));
        switch (localStorage.getItem('rol')) {
          case '1':
            location.replace('http://localhost:4200/administracion')
            break;
          case '2':
            location.replace('http://localhost:4200/alumno')
          break;
          case '3':
            location.replace('http://localhost:4200/empresas')
            break;
        }
      }
    })
  }

  abrir() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "block";
    let body = document.getElementsByTagName("body")[0];
    body!.style.overflow = "hidden";
  }

  cerrar() {
    let modal = document.getElementById("myModal");
    modal!.style.display = "none";
  }
  
}
