import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BuyerServService} from '../buyer-serv.service'
import {Bags} from '../bags'

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.page.html',
  styleUrls: ['./addcart.page.scss'],
})
export class AddcartPage implements OnInit {
  product
  selectedBag: any;

  constructor(private bagAdded: BuyerServService, private router: Router) {}
  

  ngOnInit() {this.selectedBag = this.bagAdded.selectedProduct
  }

  viewinfo(product) {
    this.router.navigateByUrl('/update', { state: product });
  }
}
