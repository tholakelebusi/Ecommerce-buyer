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
    this.router.navigateByUrl("/tabs/tab2")

  }
  resetpassword()
  {
    this.router.navigateByUrl("/resetpassword")
  }

}
