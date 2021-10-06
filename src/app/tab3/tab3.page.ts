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

  cellNo
  userProfile
  constructor(public autheService:BuyerServService, public router:Router) { }

  ngOnInit(): void {
    this.userProfile = this.autheService.getCurrentUser();
   this.cellNo=localStorage.getItem("username");
    
  }

  logout(){
    console.log("loggin out");
    
    this.autheService.logout()
    this.router.navigateByUrl("/login")
localStorage.removeItem("username");
  }

}


