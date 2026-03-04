import { addDoc, collection } from 
"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

function addVehicle(){

let brand = document.getElementById("brand").value;
let model = document.getElementById("model").value;
let plate = document.getElementById("plate").value;

const user = auth.currentUser;

addDoc(collection(db,"vehicles"),{

userId: user.uid,
brand: brand,
model: model,
plateNumber: plate

});

alert("Vehicle added");

}