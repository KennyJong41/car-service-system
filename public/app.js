// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore, collection, addDoc }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbxr3Oh1Upek-ZRZOMSrQLW3RJZEkY5uI",
  authDomain: "car-service-system-52d2e.firebaseapp.com",
  projectId: "car-service-system-52d2e",
  storageBucket: "car-service-system-52d2e.firebasestorage.app",
  messagingSenderId: "560532652789",
  appId: "1:560532652789:web:784e6bc4455d08d48dfbbc",
  measurementId: "G-N6BJRY0JJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


// LOGIN
window.login = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {

alert("Login successful");

window.location.href="dashboard.html";

})
.catch((error) => {

alert(error.message);

});

}



// REGISTER
window.register = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {

alert("Account created");

})
.catch((error) => {

alert(error.message);

});

}