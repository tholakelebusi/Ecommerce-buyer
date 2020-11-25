import { Component, OnInit } from '@angular/core';
import {Buyer} from '../buyer';
import { BuyerServService } from '../buyer-serv.service';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.page.html',
  styleUrls: ['./registar.page.scss'],
})
export class RegistarPage implements OnInit {

  email
  password
  name
  surname
  age
  cellNo
  user: Buyer
  constructor(private buyerService:BuyerServService) { }

  ngOnInit(): void {
  }


  signUp() {

    this.user = new Buyer(this.name, this.surname, this.email, this.password,this.age,this.cellNo);
    console.log(this.user);
    this.buyerService.signUpUser(this.user)
  }
}