import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LadiesComponent } from './ladies/ladies.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    NavbarComponent,
    
    LandingPageComponent,
    
    LadiesComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
