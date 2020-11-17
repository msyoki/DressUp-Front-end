import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LadiesComponent } from './ladies/ladies.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductListComponent } from './landing-page/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    LadiesComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
