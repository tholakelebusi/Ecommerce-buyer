import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BuyerServService} from '../buyer-serv.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

 
  email
  password
  loggonInUser

  constructor(public loginserv: BuyerServService, public router: Router) { }

  ngOnInit(): void {
  

  }

  login() {
 
    this.loginserv.signInUser(this.email, this.password)
    this.loggonInUser = this.loginserv.signInUser

localStorage.setItem("username",this.email)
    this.router.navigateByUrl("/tabs/tabs/tab1");
    

  }


  resetpassword()
  {
    this.router.navigateByUrl("/resetpassword")
  }

}
