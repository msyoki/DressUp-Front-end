// import { Component, OnInit } from '@angular/core';

// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

// import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
// import { Observable, timer } from 'rxjs';
// import { map, switchMap } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//   public form: FormGroup;
//   ngOnInit() {
//   }
//   constructor(private http: HttpClient) {
//     this.form = new FormGroup({
//       login: new FormControl(null, Validators.required, this.userValidator())
//     });
//   }


//   searchUser(text) {
//     // debounce
//     return timer(1000)
//       .pipe(
//         switchMap(() => {
//           // Check if username is available
//           return this.http.get<any>(`assets/json/user.json?username=${text}`)
//         })
//       );
//   }

//   userValidator(): AsyncValidatorFn {
//     return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
//       return this.searchUser(control.value)
//         .pipe(
//           map(res => {
//             // if username is already taken
//             if (res.length) {
//               // return error
//               return { 'userNameExists': true };
//             }
//           })
//         );
//     };

//   }

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