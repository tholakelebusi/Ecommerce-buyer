import { Component } from '@angular/core';
import {BuyerServService} from '../buyer-serv.service'
import {SalesService} from '../sales.service'
import { ToastController } from '@ionic/angular';

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
    public toastController: ToastController) { }

  ngOnInit() {
    this.getBagList()
this.showToaster
  }


  async showToaster()
  {
      const toast = await this.toastController.create({
        message: 'Your item has been added to cart.',
        duration: 2000
      });
      toast.present();
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
   
this.showToaster();
    this.sales.addCart(this.cart)

  }

  
}




