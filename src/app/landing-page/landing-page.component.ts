import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service'
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private loginService:LoginService,private router: Router) { }

  ngOnInit(): void {
  }
  

  logout(){
    this.loginService.logout();
    Swal.fire({  
      icon: 'success',  
      text: ' logged out!'
    })
    this.router.navigate(["home"]) 
    
  }

}
