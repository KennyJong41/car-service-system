import { createUserWithEmailAndPassword } from 
"https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import { doc, setDoc } from 
"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function registerUser() {

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let name = document.getElementById("name").value;

const userCredential = await createUserWithEmailAndPassword(auth, email, password);

const user = userCredential.user;

await setDoc(doc(db, "users", user.uid), {
name: name,
email: email,
role: "customer"
});

alert("Registration successful");

}