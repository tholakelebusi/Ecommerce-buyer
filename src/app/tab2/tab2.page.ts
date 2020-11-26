import { Component } from '@angular/core';
import {Buyer} from '../buyer';
import { BuyerServService } from '../buyer-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  selectedBag: any;
  product
  constructor(private router: Router,private BagService:BuyerServService) {
    this.product = history.state
  }
  ngOnInit(): void {
    this.selectedBag = this.BagService.selectedProduct
  }



  viewinfo(product) {
    this.router.navigateByUrl('/tab2', { state: product });
  }

}
