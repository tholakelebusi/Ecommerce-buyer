import { Component, OnInit } from '@angular/core';
import {BuyerServService} from '../buyer-serv.service'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

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
