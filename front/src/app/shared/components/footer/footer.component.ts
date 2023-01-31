import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public imgLogo: string = '';

  constructor() { }

  ngOnInit(): void {

    this.imgLogo = "../../../assets/image/logo.png"

  }

}
