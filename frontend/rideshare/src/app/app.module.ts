import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbStepperModule, NbCardModule, NbInputModule, NbDatepickerModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './register/signup/signup.component';
import { LoginComponent } from './register/login/login.component';

import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SearchComponent } from './header/navbar/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbLayoutModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbIconModule,
    NbInputModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
