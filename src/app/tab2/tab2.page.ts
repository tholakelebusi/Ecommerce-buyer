import { Component } from '@angular/core';
import {Buyer} from '../buyer';
import {SalesService} from '../sales.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  salesBag:any;


  constructor(private router: Router,private salesService:SalesService) {
 
  }
  ngOnInit(): void {
    this.addedtocart();
    this.delete;
    this.sumOfIncome()
  
  }

addedtocart()
{
 
  this.salesBag = this.salesService.getCart();

  this.router.navigateByUrl("/tabs/tab2")
console.log(this.salesBag);


}


delete(id:string)
{

  this.salesService.delete(id);

this.router.navigateByUrl("/tabs/tab2")

}


sumOfIncome(){
   console.log("sum"+this.salesBag.map(t => t.price).reduce((a , b) => a + b, 0));
  return this.salesBag.map(t => t.price).reduce((a , b) => a + b, 0);

     
}
}
