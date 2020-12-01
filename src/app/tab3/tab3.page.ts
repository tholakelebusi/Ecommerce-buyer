import { Component } from '@angular/core';
import {Buyer} from '../buyer';
import { BuyerServService } from '../buyer-serv.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userProfile;

  
  constructor(public logoutService:BuyerServService,private router:Router) {}

  ngOnInit(): void { 
 this.userProfile =this.logoutService.userInfo

   console.log(this.userProfile );

  }



  logout(){
    console.log("loggin out");
    
    this.logoutService.logout()
    this.router.navigateByUrl("/login")

  }

}
