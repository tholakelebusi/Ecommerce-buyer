import { Component, OnInit } from '@angular/core';
import {BuyerServService} from '../buyer-serv.service'

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  constructor(private authService :BuyerServService) { }

  ngOnInit(): void {
  }

   onSubmit(form) {
   
this.authService.resetPassword(form);


}

  forgotPassword(email) {
    this.authService.ForgotPassword(email);
  }

}