import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenDetailComponent } from './men-detail/men-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    NavbarComponent,
    MenDetailComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
