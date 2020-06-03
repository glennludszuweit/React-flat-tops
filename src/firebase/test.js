import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();
firestore
  .collection("users")
  .doc("ptJ2UsxdYx0ZUbISZIhZ")
  .collection("cartItems")
  .doc("k1uszxFm9LKiB15uM53K");
