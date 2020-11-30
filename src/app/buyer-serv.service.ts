import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Buyer } from './buyer';
import { Bags } from './bags'

@Injectable({
  providedIn: 'root'
})
export class BuyerServService {

  userInfor: Buyer
  selectedProduct: Bags
  userInfo: Buyer;
  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) { }

  signUpUser(user) {
    var database = firebase.default.database();

    let message = ""
    firebase.default.auth().createUserWithEmailAndPassword(user.email, user.password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      console.log(errorMessage);
    }).then(results => {
      console.log(results);

      if (results) {
        message = "successfully registered"
        firebase.default.database().ref('buyer/' + results.user.uid).set({
          name: user.name,
          email: user.email,
          surname: user.surname,
          age: user.age,
          cellNo: user.cellNo

        });
        console.log(message);

      } else {

      }

    });
  }

  signInUser(email, password) {

    let user: any
    let message = "";

    firebase.default.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      message = errorMessage
      // ...
    }).then(result => {


      user = result

      if (user) {
        message = user.user.email + " has successfully logged in"
        console.log(message);
      } else {

        console.log(message);
      }

      return user.user.email
    });

  }

  resetPassword(email: string) {
    var auth = firebase.default.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }


  getAllBags() {


    return this.db.collection("leatherBags").snapshotChanges();

    /**this.db.collection("eatherBags").snapshotChanges().subscribe(results=>{
      results.forEach((doc)=>{
        this.products.push(doc.payload.doc.data())
        this.products.map(prod=>{
          prod['id']=doc.payload.doc.id;
        })
       
        console.log(this.products);
    
    });
  });*/


    //console.log(this.products);
  }

  product: any = []
  getProducts() {
    this.db.collection("leatherBags").snapshotChanges().subscribe(results => {
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



  logout() {
    firebase.default.auth().signOut().then(() => {
      // Sign-out successful.
      console.log("Sign-out successful.");

    }).catch(function (error) {
      console.log(error);

    });

  }

  //    this.userInfo = new Authenticate(userProfile.val().name,userProfile.val().surname,userProfile.val().email,userProfile.val().age, userProfile.val().cellNo);
  getCurrentUser(){
   
    firebase.default.auth().onAuthStateChanged((user) =>{
      if (user) {
        console.log(user)
        var userId = user.uid;
        firebase.default.database().ref('/users/' + userId).once('value').then( userProfile =>{
        this.userInfo = new Buyer(userProfile.val().name,userProfile.val().surname,userProfile.val().email,userProfile.val().age, userProfile.val().cellNo,userProfile.val().password)
        console.log(this.userInfo);
   
        })
       } else {
        console.log("user not logged in");
        
    }
    });
  
    
    
  }



}
