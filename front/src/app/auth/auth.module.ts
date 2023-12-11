import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from 'src/app/auth/auth-routing.module';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';
import { RegisterComponent } from 'src/app/auth/pages/register/register.component';
import { ActivatedComponent } from 'src/app/auth/pages/activated/activated.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SocialAuthServiceConfig, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ActivatedComponent
    ],
    providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
              autoLogin: false,
              providers: [
                {
                  id: GoogleLoginProvider.PROVIDER_ID,
                  provider: new GoogleLoginProvider(environment.googleClientId)
          }
        ]
      } as SocialAuthServiceConfig,
    }
      ],

    bootstrap: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AuthRoutingModule,
        RouterModule,
        SharedModule,
    ]
})
export class AuthModule { }
