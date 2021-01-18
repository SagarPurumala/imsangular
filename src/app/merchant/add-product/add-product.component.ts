import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ImsServicesService } from 'src/app/ims-services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private service: ImsServicesService) { }
  addFlightDetails(form: NgForm) {
    this.service.addNewProduct(form.value).subscribe(response => {
      
      console.log(response);
      form.reset();
      alert("Product Added successfully!!!");
    }, err => {
      console.log(err);
    })
  }
  ngOnInit() {
  }

}
