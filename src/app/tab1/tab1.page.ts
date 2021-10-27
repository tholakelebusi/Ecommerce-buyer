import { Component } from '@angular/core';
import {BuyerServService} from '../buyer-serv.service'
import {SalesService} from '../sales.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bags:any
  cart:any
  constructor(public bagService:BuyerServService,
    private sales:SalesService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.getBagList()
this.showToaster
  }


  showToaster(){
    this.toastr.success("Hello, I'm the toastr message.")
}

  getBagList()
  {
    this.bags=this.bagService.getProducts()
   
    
  }






  addToCart(product) {
    console.log(product);
   let id = product.id
    let userId = localStorage.getItem('userID')
    this.cart = {
      userID: userId,
      quantity: 1,
      product
    }
   

    this.sales.addCart(this.cart)
    this.toastr.success("Hello, I'm the toastr message.")
  }

  
}




