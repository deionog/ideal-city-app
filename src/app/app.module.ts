import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { CityComparisonComponent } from './city-comparison/city-comparison.component';
import { OptionsListComponent } from './options-list/options-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { MapContainerComponent } from './map-container/map-container.component';
import { AuthComponent } from './auth/auth.component';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { PreferenceSelComponent } from './preference-sel/preference-sel.component';

import { NoAuthGuard } from './auth/no-auth-guard.service';
import { ApiService, UserService, UserPreferencesService, CitydataService } from './services';
import { JwtService } from './shared/jwt.service';
import { CityDataComponent } from './city-data/city-data.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthguardService } from './services/authguard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopNavComponent,
    IntroComponent,
    FooterComponent,
    CityComparisonComponent,
    OptionsListComponent,
    CityListComponent,
    MapContainerComponent,
    AuthComponent,
    ListErrorsComponent,
    PreferenceSelComponent,
    CityDataComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: IntroComponent
      },
      {
        path: 'citydata',
        component: CityDataComponent
      },
      {
        path: 'compare',
        component: CityComparisonComponent
      },
      {
        path: 'factors',
        component: PreferenceSelComponent
      },
      {
        path: 'login',
        component: AuthComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthguardService]
      },
      {
        path: 'register',
        component: AuthComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUyh4iYVk_MpAiwzDNm5gnUkjzabJn8AU',
      libraries: ["places"]
    })
  ],
  providers: [
    ApiService,
    AuthguardService,
    CitydataService,
    UserService,
    UserPreferencesService,
    NoAuthGuard,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
