import { Component } from '@angular/core';
import {BuyerServService} from '../buyer-serv.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bags:any
  constructor(public bagService:BuyerServService) { }

  ngOnInit() {
    this.getBagList()
  }

  getBagList()
  {
    this.bags=this.bagService.getProducts()
  }

}




