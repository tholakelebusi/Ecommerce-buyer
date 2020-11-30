import { Component } from '@angular/core';
import {Buyer} from '../buyer';
import { BuyerServService } from '../buyer-serv.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  userProfile;
  userInfo
  isLoggedIn : any;
  constructor(public logoutService:BuyerServService,private router:Router
    ,private db: AngularFirestore, public afAuth: AngularFireAuth) {}
  ngOnInit(): void { 
 
   
    firebase.default.auth().onAuthStateChanged((user) =>{
      if (user) {
        var userId = user.uid;
       firebase.default.database().ref('/users/' + userId).once('value').then( userProfile =>{
          this.userInfo = new Buyer(userProfile.val().name,userProfile.val().surname,userProfile.val().email,userProfile.val().age, userProfile.val().cellNo,userProfile.val().password)
          console.log(this.userInfo.name);
          // return userInfo
        })
      } else {
        console.log("user not logged in");
        
      }
    });

    
    

   // this.userProfile =this.logoutService.userInfo;

   console.log(this.userProfile );

  }

  logout(){
    console.log("loggin out");
    
    this.logoutService.logout()
    this.router.navigateByUrl("/login")

  }

}
