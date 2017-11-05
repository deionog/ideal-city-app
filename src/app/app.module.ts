import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { CityComparisonComponent } from './city-comparison/city-comparison.component';
import { OptionsListComponent } from './options-list/options-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { MapContainerComponent } from './map-container/map-container.component';

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
    MapContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUyh4iYVk_MpAiwzDNm5gnUkjzabJn8AU',
      libraries: ["places"]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
