import { Component, OnInit } from '@angular/core';
import {BuyerServService} from '../buyer-serv.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private productServeice:BuyerServService) { }

  ngOnInit() {
  }


  
}
