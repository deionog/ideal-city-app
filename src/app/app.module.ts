import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { CityComparisonComponent } from './city-comparison/city-comparison.component';
import { OptionsListComponent } from './options-list/options-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopNavComponent,
    IntroComponent,
    FooterComponent,
    CityComparisonComponent,
    OptionsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: IntroComponent
      },
      {
        path: 'compare',
        component: CityComparisonComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
