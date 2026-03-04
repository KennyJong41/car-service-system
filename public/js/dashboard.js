import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore, collection, addDoc }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyCbxr3Oh1Upek-ZRZOMSrQLW3RJZEkY5uI",
authDomain: "car-service-system-52d2e.firebaseapp.com",
projectId: "car-service-system-52d2e",

};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

window.addVehicle = async function(){

const plate = document.getElementById("plate").value;
const brand = document.getElementById("brand").value;
const model = document.getElementById("model").value;

try {

await addDoc(collection(db, "vehicles"), {

plate: plate,
brand: brand,
model: model

});

alert("Vehicle Added");

}
catch(error){

alert(error.message);

}

}