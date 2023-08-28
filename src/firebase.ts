import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyA94FtiKU8z-aXg6fCr4m1c5vcQwtdY1y4",
  authDomain: "bezkoder-firebase-8be7b.firebaseapp.com",
  projectId: "bezkoder-firebase-8be7b",
  storageBucket: "bezkoder-firebase-8be7b.appspot.com",
  messagingSenderId: "174740630347",
  appId: "1:174740630347:web:cd41291545366c5a1e96ce"
};

firebase.initializeApp(config);

export default firebase.firestore();
