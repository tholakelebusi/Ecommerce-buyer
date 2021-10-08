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

  items:any;
  getCartd() {
    this.db.collection("cart", ref => ref.where('userID', '==', this.userID) ).snapshotChanges().subscribe(val =>{
      this.items=val;

     })
    return this.items
  }



  product: any = []
  getCart() {
    this.db.collection("cart", ref => ref.where('userID', '==', this.userID) ).snapshotChanges().subscribe(results => {
      results.forEach((doc) => {
        this.product.push(doc.payload.doc.data())
        this.product.map(prod => {
          prod['id'] = doc.payload.doc.id;
        })
        // console.log(this.product);
      });
    });
    return this.product
  }




  addCart(product) {
   

    this.db.collection("cart").add(product).then(results => {
    }
    ).catch(err => {
      console.log(err);
    })


  }

  delete(id:any)
  {

    this.db.collection('cart').doc(id).delete().then(function() {
        console.log("Document successfully deleted!!");
       
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });

  }


}
