
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';  

// }


import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  register;
  constructor(private registerService: RegisterService ){

  }

  ngOnInit(){
    this.register = {
      username: '',
      password: '',
      email: ''
    };
  }
  registerUser(){
    this.registerService.registerUser(this.register).subscribe(
      response => {

        Swal.fire({  
          icon: 'success',  
          title: this.register.username + ' you are successfully registered!',
        })  
      },
      error => {
        Swal.fire({  
          icon: 'error',  
          title: this.register.username + ' you are already registered user!',
        })  
      }
    )
  }
}

