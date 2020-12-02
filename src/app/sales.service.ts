import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { BuyerServService } from './buyer-serv.service';
import * as firebase from 'firebase';



@Injectable({
  providedIn: 'root'
})
export class SalesService {

  userID = localStorage.getItem('userID')
  constructor(private db: AngularFirestore, private authService:BuyerServService) {

  }

  getCart() {
    this.db.collection('cart', ref => ref.where('userID', '==', this.userID) ).valueChanges().subscribe(val =>{
       console.log(val);
     })
    
  }

  addCart(product) {
     console.log(product);

    this.db.collection("cart").add(product).then(results => {
      console.log("added");
    }
    ).catch(err => {
      console.log(err);
    })


  }


}
