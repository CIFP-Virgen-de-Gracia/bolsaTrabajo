import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    public router: Router,
    public AuthService: AuthService

    ) { }
    //hay que cambiar este metodo para que funcione con el token
    canActivate(){
      if(this.AuthService.getToken()){
        return true;
      }else{
        this.router.navigate(['']);
        return false;
      }
    }

}
