import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
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
  message:any;
  constructor(private buyerService:BuyerServService,
    private alertCtrl: AlertController) { }

  ngOnInit(): void {
  }


  signUp() {

    this.user = new Buyer(this.name, this.surname, this.email,this.age,this.cellNo,this.password);
    console.log(this.user);
    this.buyerService.signUpUser(this.user);
    this.message = "successfully registered"
    let alert = this.alertCtrl.create({
      // name: 'Low battery',
      //   subTitle: '10% of battery remaining',
        buttons: ['Dismiss']
      });
  
    // this.router.navigateByUrl("/home");
  }
}