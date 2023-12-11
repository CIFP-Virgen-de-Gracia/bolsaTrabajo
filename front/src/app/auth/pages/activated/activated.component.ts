import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestBolsaService } from '../../services/rest-bolsa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.scss'],
})
export class ActivatedComponent implements OnInit {
  constructor(
    private restBolsaService: RestBolsaService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.activarUser();
  }

  activarUser() {
    this.activatedRoute.params.subscribe(value => {
      console.log(value['user'])
      this.restBolsaService.activarUser(value['user']).subscribe((response: any) => {
      })
    })
  }
}
