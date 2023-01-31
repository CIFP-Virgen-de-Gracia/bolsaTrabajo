import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public imgLogo: string = '';

  constructor() { }

  ngOnInit(): void {

    this.imgLogo = "../../../assets/image/logo.png"
  }

}
