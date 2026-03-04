import { signInWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

async function loginUser(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

await signInWithEmailAndPassword(auth, email, password);

alert("Login successful");

}