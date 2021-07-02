import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcgsQrOw8uFVOAFHCDxAJ0WtjiK6Yya8E",
  authDomain: "challenge-dd75b.firebaseapp.com",
  projectId: "challenge-dd75b",
  storageBucket: "challenge-dd75b.appspot.com",
  messagingSenderId: "609719044718",
  appId: "1:609719044718:web:4f0be78fafef619d12f47f",
  measurementId: "G-GHMKN0RGHZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };