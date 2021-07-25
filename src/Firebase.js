import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDQcD6m7gsOPA0iGSwY8Q2_1Snlf1Me98M",
    authDomain: "chat-app-9daf7.firebaseapp.com",
    projectId: "chat-app-9daf7",
    storageBucket: "chat-app-9daf7.appspot.com",
    messagingSenderId: "722348965442",
    appId: "1:722348965442:web:67b2c5511cd49d7e43b7db",
  })
  .auth();
