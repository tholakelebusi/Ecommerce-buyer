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




  product: any = []


  getCart() {
    this.db.collection("cart", ref => ref.where('userID', '==', this.userID) ).snapshotChanges().subscribe(results => {
    localStorage.setItem("cart",results.length.toString());
 
    
      results.forEach((doc) => {
        this.product.push(doc.payload.doc.data())
        this.product.map(prod => {
          prod['id'] = doc.payload.doc.id;
        })

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
        window.location.reload();
       
    }).catch(function(error) {
      console.error("Error removing document: ", error);
    });

  }




}
