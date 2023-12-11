import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno} from '../../interfaces/alumno.interface';
import { switchMap } from 'rxjs';
import { SocketService } from 'src/app/ofertas/apiRest/services/socket.service';
import { FormGroup } from '@angular/forms';
import { RestBolsaService } from 'src/app/auth/services/rest-bolsa.service';

@Component({
  selector: 'app-perfil-alumno',
  templateUrl: './perfil-alumno.component.html',
  styleUrls: ['./perfil-alumno.component.scss']
})
export class PerfilAlumnoComponent implements OnInit, OnChanges {

  RegisterForm!: FormGroup;

  private fileTemp: any;

  public imgPath: string = '';

  public user = JSON.parse(localStorage.getItem('user') || '{}')

  public payload: any = '';

  alumno: Alumno = {
    nick: '',
    nombre: '',
    password: '',
    apellido1: '',
    apellido2: '',
    email: '',
    ciclos: []
  }

  constructor(private alumnoService: AlumnoService,
              private activatedRoute: ActivatedRoute,
              private socketService: SocketService,
              private router: Router,
              private restBolsaService: RestBolsaService) {}

  ngOnInit(): void {
      this.payload = this.socketService.recibirNotificacion();
      if (this.user[1].image == null) {
        this.user[1].image = '../../../../assets/image/nofoto.webp';
      }
    }

    ngOnChanges(changes: SimpleChanges) {
      this.payload = this.socketService.recibirNotificacion();
    }

    public abrir() {
      let modal = document.getElementById("myModal");
      modal!.style.display = "block";
      let body = document.getElementsByTagName("body")[0];
      body!.style.overflow = "hidden";
    }
  
    cerrar() {
      let modal = document.getElementById("myModal");
      modal!.style.display = "none";
    }

    sendFile(): void {
      const formData = new FormData();
      formData.append('file', this.fileTemp);
      formData.append('user', this.user[0].nif);
      this.alumnoService.subirImagen(formData).subscribe(res => {
        let body = {'image': 'http://localhost:9090/auth/upload/' + res.file.filename};
        this.alumnoService.modificarImagen(body, this.user[0].nif).subscribe(response => {
          let body = {"email": this.user[0].email, "password": this.user[0].password}
          this.restBolsaService.login(body).subscribe(response2 => {
            localStorage.setItem('user',  JSON.stringify(response2.data));
            location.reload();
          });
        });
      });
    }

    getFile($event: any): void {
      this.fileTemp = $event.target.files[0];
      console.log(this.fileTemp);
      
    }
  
    verOferta() {
      location.replace('http://localhost:4200:/alumno/ofertas/' + this.payload.id)
    }

}
