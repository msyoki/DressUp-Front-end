import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenComponent } from './men/men.component';
import { LadiesComponent } from './ladies/ladies.component';
import { JuniorsComponent } from './juniors/juniors.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes= [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'men', component: MenComponent},
  {path: 'ladies', component: LadiesComponent},
  {path: 'juniors', component: JuniorsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }