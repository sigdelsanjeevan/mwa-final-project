import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbTabsetModule,
  NbStepperModule,
  NbCardModule,
  NbInputModule,
  NbDatepickerModule,
  NbPopoverModule,
  NbUserModule,
  NbAccordionModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';
import { NbFormFieldModule } from '@nebular/theme';
import { NbAutocompleteModule } from '@nebular/theme';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './register/signup/signup.component';
import { LoginComponent } from './register/login/login.component';

import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { SearchComponent } from './header/navbar/search.component';
import { SharerideComponent } from './home/ride/shareride/shareride.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DriverRidesComponent } from './driver/driver-rides/driver-rides.component';
import { RidesComponent } from './home/ride/rides/rides.component';
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service'
import { HttpClientModule } from '@angular/common/http';
import { RideformComponent } from './home/ride/rideform/rideform.component';
import { DriverpageComponent } from './driver/driverpage.component';
import { CitySearchComponent } from './city-search/city-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomePageComponent,
    NavbarComponent,
    SearchComponent,
    SharerideComponent,
    DriverRidesComponent,
    RideformComponent,
    DriverpageComponent,
    CitySearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbLayoutModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbFormFieldModule,
    NbTabsetModule,
    NbEvaIconsModule,
    NbAccordionModule,
    AppRoutingModule,
    HttpClientModule,
    NbIconModule,
    NbUserModule,
    NbPopoverModule,
    NbInputModule,
    NbAutocompleteModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      //normal users routes 
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
      {
        path: 'driver',
        component: DriverpageComponent
      },
      {
        path: 'rides',
        component: RidesComponent
      },
      //routes for drivers
      {
        path: 'driver/rides',
        component: DriverRidesComponent
      },

      {
        path: 'rides/share',
        component: SharerideComponent
      },
      {
        path: 'driver/rides/add',
        component: RideformComponent
      },

    ])
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
