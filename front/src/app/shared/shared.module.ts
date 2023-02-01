import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  exports: [
    CommonModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
