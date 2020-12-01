import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

import { BuyerServService } from './buyer-serv.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  userID = localStorage.getItem('userID').toString()
  constructor(private db: AngularFirestore, private authService:BuyerServService) {

  }

  getCart() {
    //  this.db.collection("cart").snapshotChanges().subscribe(results =>{
    //    console.log(results);
       
    //  })

     this.db.collection('cart', ref => ref.where('userID', '==', this.userID) ).valueChanges().subscribe(val =>{
       console.log(val);
       
     })
    // firebase.firestore.CollectionReference.re
      // .get().subscribe(results => {
      //   results.forEach(function (doc) {
      //     // doc.data() is never undefined for query doc snapshots
      //     console.log(doc.id, " => ", doc.data());
      //   });
      // }

    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });
  }

  addCart(product) {
    // console.log(product);

    this.db.collection("cart").add(product).then(results => {
      console.log("added");
    }
    ).catch(err => {
      console.log(err);
    })


  }
}
