import { Component } from '@angular/core';
import {Buyer} from '../buyer';
import {SalesService} from '../sales.service'
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  salesBag:any;


  constructor(private router: Router,
    private toastController: ToastController,
    private salesService:SalesService) {
 
  }
  ngOnInit(): void {
    this.addedtocart();
    this.delete;
    this.sumOfIncome()
  this.salesBag.getTotal()
  }

addedtocart()
{
 
  this.salesBag = this.salesService.getCart();

 
console.log(this.salesBag);


}

async showRemoved()
{
    const toast = await this.toastController.create({
      message: 'Succesfully deleted.',
      duration: 2000
    });
    toast.present();
  }

delete(id:string)
{
 
  this.salesService.delete(id);
this.showRemoved();
}


sumOfIncome(){
   console.log("sum")
     
}


}
