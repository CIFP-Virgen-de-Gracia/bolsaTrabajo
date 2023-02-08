import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  get usuario() {

    return this.authService.usuario;

  }

  constructor(

    private authService: AuthService,
    private router: Router,

  ) { }

  logout() {

    this.authService.logout();

    window.location.reload();

  }

}
