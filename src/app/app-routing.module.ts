import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenComponent } from './men/men.component';
import { LadiesComponent } from './ladies/ladies.component';
import { JuniorsComponent } from './juniors/juniors.component';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { AddPostComponent } from './add-post/add-post.component';
// import { LoginComponent } from './login/login.component';


const routes: Routes= [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'men', component: MenComponent},
  {path: 'ladies', component: LadiesComponent},
  {path: 'juniors', component: JuniorsComponent},

  { path: 'post', component: PostListComponent },
  { path: 'post/:id', component: PostDetailsComponent },
  { path: 'add', component: AddPostComponent }
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