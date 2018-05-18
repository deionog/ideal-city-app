import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { CityComparisonComponent } from './city-comparison/city-comparison.component';
import { OptionsListComponent } from './options-list/options-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { MapContainerComponent } from './map-container/map-container.component';
//import { LoginComponent } from './login/login.component';
//import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { NoAuthGuard } from './auth/no-auth-guard.service';
import { ApiService, UserService } from './services';
import { JwtService } from './shared/jwt.service';
import { ListErrorsComponent } from './list-errors/list-errors.component';

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
    ListErrorsComponent
  ],
  imports: [
    //AuthModule,
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
        path: 'compare',
        component: CityComparisonComponent
      },
      {
        path: 'login',
        component: AuthComponent,
        canActivate: [NoAuthGuard]
      },
      {
        path: 'register',
        component: AuthComponent,
        canActivate: [NoAuthGuard]
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUyh4iYVk_MpAiwzDNm5gnUkjzabJn8AU',
      libraries: ["places"]
    })
  ],
  providers: [
    ApiService,
    UserService,
    NoAuthGuard,
    JwtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
