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
    this.salesBag = this.salesService.getCart();
    console.log(this.salesBag)
  }

// addedtocart()
// {
//   this.salesBag = this.salesService.getCart();
//     console.log(this.salesBag)
//   this.router.navigateByUrl("/tabs/tab2")
// }


delete(id:any)
{

  this.salesService.delete(id);
console.log(id);
}
}
