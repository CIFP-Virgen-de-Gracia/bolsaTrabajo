import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IRegisterUser } from '../interfaces/iregister';


@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.scss']
})
export class LoginSuccessfulComponent implements OnInit {

  users: IRegisterUser[] = [];
  loginUserEmail: string = "";
  currentUserID: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUserID = Number(this.route.snapshot.paramMap.get('id'));

    const allStoredUsers = JSON.parse(localStorage.getItem('registerUsersLocalStorage')!);
    const currentUserIndex = allStoredUsers.findIndex((x: any) => x.id == this.currentUserID);
    const currentUserInfo = allStoredUsers[currentUserIndex];

    this.loginUserEmail = currentUserInfo.email;

  }

}
