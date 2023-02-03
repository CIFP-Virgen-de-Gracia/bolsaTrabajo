import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from '../../interfaces/alumno.interface';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.scss']
})
export class PerfilAlumnoComponent implements OnInit {

  alumno!: Alumno;

  constructor(private alumnoService: AlumnoService,
              private activatedRoute: ActivatedRoute,

              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({nif}) => this.alumnoService.getAlumnoNif('2B')))
      .subscribe(
        (alumno) => {
          this.alumno = alumno;
        }
      );
    }
}
