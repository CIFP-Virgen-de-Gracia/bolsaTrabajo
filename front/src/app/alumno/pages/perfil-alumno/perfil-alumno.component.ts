import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.scss']
})
export class PerfilAlumnoComponent {

  constructor(private AlumnoService: AlumnoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

}
