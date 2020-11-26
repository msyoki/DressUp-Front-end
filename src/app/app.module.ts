import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LadiesComponent } from './ladies/ladies.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductListComponent } from './landing-page/product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LadiesProductsComponent } from './ladies/ladies-products/ladies-products.component';
import { JuniorsComponent } from './juniors/juniors.component';
import { JuniorProductsComponent } from './juniors/junior-products/junior-products.component';
import { MenProductsComponent } from './men/men-products/men-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { NewproductComponent } from './newproduct/newproduct.component';





@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    LadiesComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ProductListComponent,
    NavbarComponent,
    LadiesProductsComponent,
    JuniorsComponent,
    JuniorProductsComponent,
    MenProductsComponent,
    ProfileComponent,
    NewproductComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
