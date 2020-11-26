// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-newproduct',
//   templateUrl: './newproduct.component.html',
//   styleUrls: ['./newproduct.component.css']
// })
// export class NewproductComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }



import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';  
@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {
  image: File;
  name: string;
  price: string;
  stock: string;
  size: string;
  category: string;
  profile: string;
  constructor(private http: HttpClient) { }
  OnImageChanged(event:any){
    this.image = event.target.files[0];
  }
  OnNameChanged(event:any){
    this.name = event.target.value;
  }
  OnPriceChanged(event:any){
    this.price = event.target.value;
  }
  OnStockChanged(event:any){
    this.stock = event.target.value;
  }
  OnSizeChanged(event:any){
    this.size = event.target.value;
  }
  OnCategoryChanged(event:any){
    this.category = event.target.value;
  }
  OnProfileChanged(event:any){
    this.profile = event.target.value;
  }
  newProduct(){
    const uploadData = new FormData();
    uploadData.append('image', this.image, this.image.name);
    uploadData.append('name', this.name);
    uploadData.append('price', this.price);
    uploadData.append('stock', this.stock);
    uploadData.append('size', this.size);
    uploadData.append('category',this.category);
    uploadData.append('profile',this.profile);
    this.http.post('https://dressup05.herokuapp.com/api/newproduct/', uploadData).subscribe(
      response => {
        Swal.fire({  
          icon: 'success',  
          text: ' successfully logged in!'
        })
      },
      error => {
        Swal.fire({  
          icon: 'error',  
          text:  ' check your credentials!',
        })  
      }
    )
  }
  ngOnInit(): void {
  }
}